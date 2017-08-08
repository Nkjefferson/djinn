const index = require('./index'),
	  assert = require('chai').assert,
	  expect = require('chai').expect,
	  should = require('chai').should,
	  mock = require('node-mocks-http')
	  express = require('express');

describe('Index',function(){
	describe('hello()', function(){
		it('should reply with hello',function(){
			assert.equal(index.hello(),"hello",'index hello() says hello');
		});
	});
	
});	

