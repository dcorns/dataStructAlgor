'use strict';

var expect = require('chai').expect;
var List = require('./list.js');

describe('List psudoclass', function(){

  it('can instantiate a new list', function(){
    var ls = new List();
    expect(ls).to.be.an.instanceof(List);
  });
  it('starts with a listsize of zero', function(){
    var ls = new List();
    expect(ls.listSize).to.be.eq(0);
  });

  it('has a dataStore array with 0 length', function(){
    var ls = new List();
    expect(ls.dataStore).isArray;
    expect(ls.dataStore.length).to.be.eq(0);
  });

  it('can add a new list item to dataStore', function(){
    var ls = new List();
    ls.append('List Item');
    expect(ls.dataStore).to.contain('List Item');
  });

  it('can increment listSize and clear the list', function(){
    var ls = new List();
    ls.append('List Item');
    expect(ls.listSize).to.be.eq(1);
    ls.clear();
    expect(ls.listSize).to.be.eq(0);
    expect(ls.dataStore).to.be.empty;
  });

  it('can find list item\'s index by contence',function(){
    var ls = new List();
    ls.append('List Item');
    expect(ls.find('List Item')).to.be.eq(0);
  });

  it('find function returns -1 when it can not find item',function(){
    var ls = new List();
    expect(ls.find('Not There')).to.be.eq(-1);
  });

  it('can return self as string', function(){
    var ls= new List();
    expect(ls.toString()).to.be.string;
  });

  it('can insert new item after a specified item', function(){
    var ls= new List();
    ls.append('One');
    ls.append('Three');
    ls.insert('Two','One');
    expect(ls.dataStore[0]).to.be.eq('One');
    expect(ls.dataStore[1]).to.be.eq('Two');
    expect(ls.dataStore[2]).to.be.eq('Three');
  });

  it('can remove an item', function(){
    var ls= new List();
    ls.append('One');
    ls.append('Three');
    ls.append('Two');
    ls.remove('Three');
    expect(ls.dataStore[0]).to.be.eq('One');
    expect(ls.dataStore[1]).to.be.eq('Two');
    expect(ls.dataStore[2]).to.be.undefined;
  });

  it('keeps tracks and moves cursor position', function(){
    var ls= new List();
    ls.append('One');
    ls.append('Two');
    ls.append('Three');
    expect(ls.pos).to.be.eq(2);
    ls.front();
    expect(ls.pos).to.be.eq(0);
    ls.end();
    expect(ls.pos).to.be.eq(2);
    ls.previous();
    expect(ls.pos).to.be.eq(1);
    ls.next();
    expect(ls.pos).to.be.eq(2);
  });


});