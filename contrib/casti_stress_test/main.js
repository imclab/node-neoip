#!/usr/bin/env node
// initial version of casti/casto tester
/**
 * TODO
 * - make a casti_ctrl_t
 * - make a url builder for casto
 * - potentially a casto_bwlimiter_t
*/

if(false){
	var casti_ctrl_t	= require('./casti_ctrl_t');
	
	var casti_ctrl	= casti_ctrl_t.create({
		'casti_opts'	: {
			'mdata_srv_uri'		: "http://localhost/~jerome/neoip_html/cgi-bin/cast_mdata_echo_server.fcgi",
			'cast_name'		: "superstream",
			'cast_privtext'		: "supersecret",
			'scasti_uri'		: "http://127.0.0.1:8124",
			'scasti_mod'		: "raw",
			'http_peersrc_uri'	: "",
			'web2srv_str'		: "dummyuserdata"
		}
	}, function(error, cast_privhash){
		console.log("error:"+error);
		console.log("cast_privhash="+cast_privhash);
	});
}

// url for casto "http://localhost:4560/a761ce3a/superstream"

if( true ){
	var sys		= require('sys');
	
	var neoip_rpc	= require('../../lib/neoip_rpc');
	
	// start the probbing
	var call_url	= "http://localhost:4550/neoip_oload_appdetect_jsrest.js";
	call_url	= "http://localhost:4570/neoip_casti_ctrl_wpage_jsrest.js";
	
	
	var mdata_srv_uri	= "http://localhost/~jerome/neoip_html/cgi-bin/cast_mdata_echo_server.fcgi";
	var cast_name		= "superstream"
	var cast_privtext	= "supersecret"
	var scasti_uri		= "http://127.0.0.1:8124"
	var scasti_mod		= "raw"
	var http_peersrc_uri	= ""
	var web2srv_str		= "dummyuserdata"
	
	if( process.argv[1] == __filename ){
		var method_name	= "request_stream";
		var method_args	= [mdata_srv_uri, cast_name, cast_privtext, scasti_uri, scasti_mod, http_peersrc_uri, web2srv_str];
		var rpc_call	= new neoip_rpc.call(call_url, method_name, method_args, function(returned_val){
			console.log("succeed");	
			console.log(sys.inspect(returned_val));
		}, function(){
			console.log("failed");
		});
	}
}