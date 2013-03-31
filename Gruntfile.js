module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: [
        "src/intro.js",
        "src/ciphers/asymmetric/dsa.js",
        "src/ciphers/asymmetric/elgamal.js",
        "src/ciphers/asymmetric/jsbn.js",
        "src/ciphers/asymmetric/jsbn2.js",
        "src/ciphers/asymmetric/rsa.js",
        "src/ciphers/hash/md5.js",
        "src/ciphers/hash/ripe-md.js",
        "src/ciphers/hash/sha.js",
        "src/ciphers/openpgp.cfb.js",
        "src/ciphers/openpgp.crypto.js",
        "src/ciphers/openpgp.crypto.sym.js",
        "src/ciphers/symmetric/aes.js",
        "src/ciphers/symmetric/blowfish.js",
        "src/ciphers/symmetric/cast5.js",
        "src/ciphers/symmetric/dessrc.js",
        "src/ciphers/symmetric/twofish.js",
        "src/compression/zlib/jsxcompressor.js",
        "src/config/openpgp.config.js",
        "src/encoding/base64.js",
        "src/encoding/openpgp.encoding.asciiarmor.js",
        "src/encoding/openpgp.encoding.js",
        "src/openpgp.js",
        "src/openpgp.keyring.js",
        "src/openpgp.msg.message.js",
        "src/openpgp.msg.privatekey.js",
        "src/openpgp.msg.publickey.js",
        "src/packet/openpgp.packet.compressed.js",
        "src/packet/openpgp.packet.encrypteddata.js",
        "src/packet/openpgp.packet.encryptedintegrityprotecteddata.js",
        "src/packet/openpgp.packet.encryptedsessionkey.js",
        "src/packet/openpgp.packet.js",
        "src/packet/openpgp.packet.keymaterial.js",
        "src/packet/openpgp.packet.literaldata.js",
        "src/packet/openpgp.packet.marker.js",
        "src/packet/openpgp.packet.modificationdetectioncode.js",
        "src/packet/openpgp.packet.onepasssignature.js",
        "src/packet/openpgp.packet.signature.js",
        "src/packet/openpgp.packet.userattribute.js",
        "src/packet/openpgp.packet.userid.js",
        "src/type/openpgp.type.keyid.js",
        "src/type/openpgp.type.mpi.js",
        "src/type/openpgp.type.s2k.js",
        "src/util/util.js",
        "src/outro.js"
        ],
        dest: 'resources/openpgp.js'
      }
    },
    replace : {
      openpgpjs: {
        src: ['resources/openpgp.js'],
        dest: ['resources/openpgp.js'],
        replacements: [{
          from: /OpenPGP.js VERSION/g,
          to: 'OpenPGP.js v<%= pkg.version %>.<%= grunt.template.today("yyyymmdd") %>'
        }]
      }
    },
    uglify: {
      openpgpjs: {
        files: {
          "resources/openpgp.min.js" : [ "resources/openpgp.js" ]
        }
      },
      options: {
        banner: '/*! OpenPGPjs.org  this is LGPL licensed code, see LICENSE/our website for more information.- v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-text-replace');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'replace', 'uglify']);

};
