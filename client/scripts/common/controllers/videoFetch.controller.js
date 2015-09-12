'use strict';
var controllername = 'videoFetch';


var peervision = require('peervision')
var swarm = require('webrtc-swarm')
var signalhub = require('signalhub')
var pump = require('pump')

module.exports = function(app) {
/////////////////////////////////////

    // var vision = peervision(new Buffer(location.toString().split('#')[1], 'hex'))
    // var sw = swarm(signalhub('pv-' + vision.id.toString('hex'), ['https://signalhub.mafintosh.com']))

    // sw.on('peer', function (p) {
    //   console.error('DEBUG: WebRTC peer')
    //   pump(p, vision.createStream(), p)
    // })

    // var AudioContext = window.AudioContext || window.webkitAudioContext
    // var context = new AudioContext()
    // var offset = 0
    // var next = 0

    // vision.get(offset, function loop (err, blk) {
    //   if (err) throw err
    //   context.decodeAudioData(blk.buffer, function (buffer) {
    //     var source = context.createBufferSource()

    //     source.buffer = buffer
    //     source.connect(context.destination)
    //     source.start(next)

    //     if (!next) next = context.currentTime
    //     else next = next + buffer.duration
    //     console.log('processed', offset)
    //     vision.get(++offset, loop)
    //   }, function () {
    //     console.log('error')
    //     vision.get(++offset, loop)
    //   })
    // })

    // function onerror (err) {
    //   console.log('on error')
    //   throw err
    // }

    // function onsuccess (buffer) {
    //   console.log('decode', buffer)
    // }

/////////////////////////////////////


    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    // var deps = ['main.common.peervision'];
    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;

        this.startListening = function(){
            console.log('DEBUG: Start Listening');

        }

        var producer = peervision();
        // $scope.test = 'Test scope';
        // debugger;

        var activate = function() {

        };
        activate();
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
