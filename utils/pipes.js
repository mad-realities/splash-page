/*
MIT License

Copyright (c) 2018 Isaiah Odhner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import * as THREE from "three";

let hasRun = false;

const pipes = (renderer) => {
  if (hasRun) {
    return;
  }
  hasRun = true;
  var gridBounds = new THREE.Box3(
    new THREE.Vector3(-10, -10, -10),
    new THREE.Vector3(10, 10, 10)
  );
  var nodes = {};
  function setAt(position, value) {
    nodes["(" + position.x + ", " + position.y + ", " + position.z + ")"] =
      value;
  }
  function getAt(position) {
    return nodes[
      "(" + position.x + ", " + position.y + ", " + position.z + ")"
    ];
  }
  function clearGrid() {
    nodes = {};
  }

  var Pipe = function (scene) {
    var self = this;
    var pipeRadius = 0.2;
    var ballJointRadius = pipeRadius * 1.5;

    self.currentPosition = randomIntegerVector3WithinBox(gridBounds);
    self.positions = [self.currentPosition];
    self.object3d = new THREE.Object3D();
    scene.add(self.object3d);

    var color = new THREE.Color(`hsl(${randomInteger(0, 360)}, 100%, 50%)`);
    self.material = new THREE.MeshPhongMaterial({
      specular: 0xa9fcff,
      color,
      emissive: color.multiplyScalar(0.5),
      shininess: 100,
    });

    var makeCylinderBetweenPoints = function (fromPoint, toPoint, material) {
      var deltaVector = new THREE.Vector3().subVectors(toPoint, fromPoint);
      var arrow = new THREE.ArrowHelper(
        deltaVector.clone().normalize(),
        fromPoint
      );
      var geometry = new THREE.CylinderGeometry(
        pipeRadius,
        pipeRadius,
        deltaVector.length(),
        10,
        4,
        true
      );
      var mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.setFromQuaternion(arrow.quaternion);
      mesh.position.addVectors(fromPoint, deltaVector.multiplyScalar(0.5));
      mesh.updateMatrix();
      self.object3d.add(mesh);
    };

    var makeBallJoint = function (position) {
      var ball = new THREE.Mesh(
        new THREE.SphereGeometry(ballJointRadius, 8, 8),
        self.material
      );
      ball.position.copy(position);
      self.object3d.add(ball);
    };

    setAt(self.currentPosition, self);

    makeBallJoint(self.currentPosition);

    self.update = function () {
      if (self.positions.length > 1) {
        var lastPosition = self.positions[self.positions.length - 2];
        var lastDirectionVector = new THREE.Vector3().subVectors(
          self.currentPosition,
          lastPosition
        );
      }
      if (chance(1 / 2) && lastDirectionVector) {
        var directionVector = lastDirectionVector;
      } else {
        var directionVector = new THREE.Vector3();
        directionVector[chooseFrom("xyz")] += chooseFrom([+1, -1]);
      }
      var newPosition = new THREE.Vector3().addVectors(
        self.currentPosition,
        directionVector
      );
      if (!gridBounds.containsPoint(newPosition)) {
        return;
      }
      if (getAt(newPosition)) {
        return;
      }
      setAt(newPosition, self);

      // joint
      // (initial ball joint is handled elsewhere)
      if (lastDirectionVector && !lastDirectionVector.equals(directionVector)) {
        makeBallJoint(self.currentPosition);
      }

      // pipe
      makeCylinderBetweenPoints(
        self.currentPosition,
        newPosition,
        self.material
      );

      // update
      self.currentPosition = newPosition;
      self.positions.push(newPosition);
    };
  };

  var pipes = [];
  var options = { multiple: true, interval: [16, 24] };

  // camera
  var camera = renderer.camera;

  // scene
  var scene = new THREE.Scene();

  // lighting
  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);

  var directionalLightL = new THREE.DirectionalLight(0xffffff, 0.9);
  directionalLightL.position.set(-1.2, 1.5, 0.5);
  scene.add(directionalLightL);

  var clearing = false;
  var clearTID = -1;
  function clear() {
    clearTimeout(clearTID);
    clearTID = setTimeout(
      clear,
      random(options.interval[0], options.interval[1]) * 1000
    );
    if (!clearing) {
      clearing = true;
      reset();
    }
  }
  clearTID = setTimeout(
    clear,
    random(options.interval[0], options.interval[1]) * 1000
  );

  function reset() {
    renderer.gl.clear();
    for (var i = 0; i < pipes.length; i++) {
      scene.remove(pipes[i].object3d);
    }
    pipes = [];
    clearGrid();
    look();
    clearing = false;
  }

  // this function is executed on each animation frame
  function animate() {
    // update
    for (var i = 0; i < pipes.length; i++) {
      pipes[i].update(scene);
    }
    if (pipes.length === 0) {
      for (var i = 0; i < 3; i++) {
        pipes.push(new Pipe(scene, {}));
      }
    }
    if (!clearing) {
      renderer.gl.render(scene, camera);
    }
    requestAnimationFrame(animate);
  }

  function look() {
    camera.position.set(0, 0, 14);
    var center = new THREE.Vector3(0, 0, 0);
    camera.lookAt(center);
  }

  look();

  // start animation
  animate();

  /**************\
  |boring helpers|
  \**************/
  function random(x1, x2) {
    return Math.random() * (x2 - x1) + x1;
  }
  function randomInteger(x1, x2) {
    return Math.round(random(x1, x2));
  }
  function chance(value) {
    return Math.random() < value;
  }
  function chooseFrom(values) {
    return values[Math.floor(Math.random() * values.length)];
  }
  function randomIntegerVector3WithinBox(box) {
    return new THREE.Vector3(
      randomInteger(box.min.x, box.max.x),
      randomInteger(box.min.y, box.max.y),
      randomInteger(box.min.z, box.max.z)
    );
  }
};

export default pipes;
