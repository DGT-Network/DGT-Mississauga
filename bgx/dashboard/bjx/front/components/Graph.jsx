import React from 'react'
import {ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';
import axios from 'axios';
import * as d3 from "d3";
import $ from 'jquery';
import colorbrewer from 'colorbrewer';
import { connect } from 'react-redux'

import { humanize } from '../logic/peers'

import LineSegment from '../helpers/LineSegment'

import { selectPeer as selectP, filterPeers} from '../actions/actions';
import Legend from './Legend'
import Filters from './Filters'


class Graph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {collapsedNodes: [],
                  hiddenNodes: []}

    this.selected    = {}
    this.highlighted = null
    this.collapsed = null
    this.graphh       = {}
  }

  drawGraph() {
    $('#graph').empty();

    let that = this;

    let graph = this.graphh;

    let config = {
    "title" : "Les Miserables characters",
    "graph" : {
        "linkDistance" : 60,
        "charge"       : -400,
        "height"       : 400,
        "numColors"    : 12,
        "labelPadding" : {
            "left"   : 3,
            "right"  : 3,
            "top"    : 2,
            "bottom" : 2
        },
        "labelMargin" : {
            "left"   : 3,
            "right"  : 3,
            "top"    : 2,
            "bottom" : 2
        },
        "ticksWithoutCollisions" : 50
    },
    "types" : {
        "group0" : {
            "short" : "Group 0",
            "long"  : "Group 0 long name for docs"
        },
        "group1" : {
            "short" : "Group 1",
            "long"  : "Group 1 long name for docs"
        },
        "group2" : {
            "short" : "Group 2",
            "long"  : "Group 2 long name for docs"
        },
        "group3" : {
            "short" : "Group 3",
            "long"  : "Group 3 long name for docs"
        },
        "group4" : {
            "short" : "Group 4",
            "long"  : "Group 4 long name for docs"
        },
        "group5" : {
            "short" : "Group 5",
            "long"  : "Group 5 long name for docs"
        },
        "group6" : {
            "short" : "Group 6",
            "long"  : "Group 6 long name for docs"
        },
        "group7" : {
            "short" : "Group 7",
            "long"  : "Group 7 long name for docs"
        },
        "group8" : {
            "short" : "Group 8",
            "long"  : "Group 8 long name for docs"
        },
        "group9" : {
            "short" : "Group 9",
            "long"  : "Group 9 long name for docs"
        },
        "group10" : {
            "short" : "Group 10",
            "long"  : "Group 10 long name for docs"
        }
    },
    "constraints" : [
        {
            "has"    : { "type" : "group1" },
            "type"   : "position",
            "x"      : 0.2,
            "y"      : 0.2,
            "weight" : 0.7
        }, {
            "has"    : { "type" : "group2" },
            "type"   : "position",
            "x"      : 0.8,
            "y"      : 0.2,
            "weight" : 0.7
        }, {
            "has"    : { "type" : "group3" },
            "type"   : "position",
            "x"      : 0.2,
            "y"      : 0.5,
            "weight" : 0.7
        }, {
            "has"    : { "type" : "group4" },
            "type"   : "position",
            "x"      : 0.8,
            "y"      : 0.5,
            "weight" : 0.7
        }, {
            "has"    : { "type" : "group5" },
            "type"   : "position",
            "x"      : 0.2,
            "y"      : 0.8,
            "weight" : 0.7
        }, {
            "has"    : { "type" : "group8" },
            "type"   : "position",
            "x"      : 0.8,
            "y"      : 0.8,
            "weight" : 0.7
        }
    ]
}


//  graph.data = {"Fauchelevent": {"name":"Fauchelevent","type":"group0","depends":["Valjean","Javert"],"dependedOnBy":["MotherInnocent","Gribier"],"docs":"<h2>Fauchelevent <em>Group 0 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>A critic of <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a>\u2019s while <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> is the mayor of Montreuil-sur-mer under \nthe assumed name of Madeleine. <a href=\"#obj-Fauchelevent\" class=\"select-object\" data-name=\"Fauchelevent\">Fauchelevent<\/a> becomes indebted to <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> when \n<a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> saves him from a carriage accident. When they meet again years later, \n<a href=\"#obj-Fauchelevent\" class=\"select-object\" data-name=\"Fauchelevent\">Fauchelevent<\/a> returns the favor by hiding <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> and <a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a> in a convent.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-MotherInnocent\" class=\"select-object\" data-name=\"MotherInnocent\">MotherInnocent<\/a><\/li>\n<li><a href=\"#obj-Gribier\" class=\"select-object\" data-name=\"Gribier\">Gribier<\/a><\/li>\n<\/ul>\n"},"Myriel":{"name":"Myriel","type":"group1","depends":[],"dependedOnBy":["Napoleon","Mlle.Baptistine","Mme.Magloire","CountessdeLo","Geborand","Champtercier","Cravatte","Count","OldMan","Valjean"],"docs":"<h2>Myriel <em>Group 1 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>The bishop of Digne. M. <a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a> is a much-admired clergyman whose great kindness \nand charity have made him popular throughout his parish. He passes on these \nsame qualities to <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> and initiates the ex-convict\u2019s spiritual renewal by \nsaving <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> from arrest and making him promise to live as an honest man.<\/p>\n\n<h3>Depends on <em>(none)<\/em><\/h3>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Napoleon\" class=\"select-object\" data-name=\"Napoleon\">Napoleon<\/a><\/li>\n<li><a href=\"#obj-Mlle-Baptistine\" class=\"select-object\" data-name=\"Mlle.Baptistine\">Mlle.Baptistine<\/a><\/li>\n<li><a href=\"#obj-Mme-Magloire\" class=\"select-object\" data-name=\"Mme.Magloire\">Mme.Magloire<\/a><\/li>\n<li><a href=\"#obj-CountessdeLo\" class=\"select-object\" data-name=\"CountessdeLo\">CountessdeLo<\/a><\/li>\n<li><a href=\"#obj-Geborand\" class=\"select-object\" data-name=\"Geborand\">Geborand<\/a><\/li>\n<li><a href=\"#obj-Champtercier\" class=\"select-object\" data-name=\"Champtercier\">Champtercier<\/a><\/li>\n<li><a href=\"#obj-Cravatte\" class=\"select-object\" data-name=\"Cravatte\">Cravatte<\/a><\/li>\n<li><a href=\"#obj-Count\" class=\"select-object\" data-name=\"Count\">Count<\/a><\/li>\n<li><a href=\"#obj-OldMan\" class=\"select-object\" data-name=\"OldMan\">OldMan<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n"},"Napoleon":{"name":"Napoleon","type":"group1","depends":["Myriel"],"dependedOnBy":[],"docs":"<h2>Napoleon <em>Group 1 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Mlle.Baptistine":{"name":"Mlle.Baptistine","type":"group1","depends":["Myriel"],"dependedOnBy":["Mme.Magloire","Valjean"],"docs":"<h2>Mlle.Baptistine <em>Group 1 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mme-Magloire\" class=\"select-object\" data-name=\"Mme.Magloire\">Mme.Magloire<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n"},"Mme.Magloire":{"name":"Mme.Magloire","type":"group1","depends":["Myriel","Mlle.Baptistine"],"dependedOnBy":["Valjean"],"docs":"<h2>Mme.Magloire <em>Group 1 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a><\/li>\n<li><a href=\"#obj-Mlle-Baptistine\" class=\"select-object\" data-name=\"Mlle.Baptistine\">Mlle.Baptistine<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n"},"CountessdeLo":{"name":"CountessdeLo","type":"group1","depends":["Myriel"],"dependedOnBy":[],"docs":"<h2>CountessdeLo <em>Group 1 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Geborand":{"name":"Geborand","type":"group1","depends":["Myriel"],"dependedOnBy":[],"docs":"<h2>Geborand <em>Group 1 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Champtercier":{"name":"Champtercier","type":"group1","depends":["Myriel"],"dependedOnBy":[],"docs":"<h2>Champtercier <em>Group 1 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Cravatte":{"name":"Cravatte","type":"group1","depends":["Myriel"],"dependedOnBy":[],"docs":"<h2>Cravatte <em>Group 1 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Count":{"name":"Count","type":"group1","depends":["Myriel"],"dependedOnBy":[],"docs":"<h2>Count <em>Group 1 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"OldMan":{"name":"OldMan","type":"group1","depends":["Myriel"],"dependedOnBy":[],"docs":"<h2>OldMan <em>Group 1 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Labarre":{"name":"Labarre","type":"group2","depends":[],"dependedOnBy":["Valjean"],"docs":"<h2>Labarre <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on <em>(none)<\/em><\/h3>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n"},"Valjean":{"name":"Valjean","type":"group2","depends":["Labarre","Mme.Magloire","Mlle.Baptistine","Myriel"],"dependedOnBy":["Fauchelevent","Marguerite","Mme.deR","Isabeau","Gervais","Fantine","Mme.Thenardier","Thenardier","Gueulemer","Babet","Claquesous","Montparnasse","Cosette","Javert","Bamatabois","Simplice","Scaufflaire","Woman1","Judge","Champmathieu","Brevet","Chenildieu","Cochepaille","Woman2","MotherInnocent","Gavroche","Gillenormand","Mlle.Gillenormand","Marius","Enjolras","Bossuet","Toussaint"],"docs":"<h2>Valjean <em>Group 2 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a>\u2019s adopted father. <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> is an ex-convict who leaves behind a life \nof hatred and deceit and makes his fortune with his innovative industrial \ntechniques. He finds fulfillment in loving his adopted daughter and helping \npeople who are in difficult situations, even when it means risking his own life \nand welfare. <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> adopts pseudonyms to evade the police and combines a \nconvict\u2019s street smarts with his newfound idealism and compassion. His whole \nlife is a quest for redemption, and he ultimately finds bliss on his deathbed.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Labarre\" class=\"select-object\" data-name=\"Labarre\">Labarre<\/a><\/li>\n<li><a href=\"#obj-Mme-Magloire\" class=\"select-object\" data-name=\"Mme.Magloire\">Mme.Magloire<\/a><\/li>\n<li><a href=\"#obj-Mlle-Baptistine\" class=\"select-object\" data-name=\"Mlle.Baptistine\">Mlle.Baptistine<\/a><\/li>\n<li><a href=\"#obj-Myriel\" class=\"select-object\" data-name=\"Myriel\">Myriel<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Fauchelevent\" class=\"select-object\" data-name=\"Fauchelevent\">Fauchelevent<\/a><\/li>\n<li><a href=\"#obj-Marguerite\" class=\"select-object\" data-name=\"Marguerite\">Marguerite<\/a><\/li>\n<li><a href=\"#obj-Mme-deR\" class=\"select-object\" data-name=\"Mme.deR\">Mme.deR<\/a><\/li>\n<li><a href=\"#obj-Isabeau\" class=\"select-object\" data-name=\"Isabeau\">Isabeau<\/a><\/li>\n<li><a href=\"#obj-Gervais\" class=\"select-object\" data-name=\"Gervais\">Gervais<\/a><\/li>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a><\/li>\n<li><a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a><\/li>\n<li><a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a><\/li>\n<li><a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a><\/li>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Bamatabois\" class=\"select-object\" data-name=\"Bamatabois\">Bamatabois<\/a><\/li>\n<li><a href=\"#obj-Simplice\" class=\"select-object\" data-name=\"Simplice\">Simplice<\/a><\/li>\n<li><a href=\"#obj-Scaufflaire\" class=\"select-object\" data-name=\"Scaufflaire\">Scaufflaire<\/a><\/li>\n<li><a href=\"#obj-Woman1\" class=\"select-object\" data-name=\"Woman1\">Woman1<\/a><\/li>\n<li><a href=\"#obj-Judge\" class=\"select-object\" data-name=\"Judge\">Judge<\/a><\/li>\n<li><a href=\"#obj-Champmathieu\" class=\"select-object\" data-name=\"Champmathieu\">Champmathieu<\/a><\/li>\n<li><a href=\"#obj-Brevet\" class=\"select-object\" data-name=\"Brevet\">Brevet<\/a><\/li>\n<li><a href=\"#obj-Chenildieu\" class=\"select-object\" data-name=\"Chenildieu\">Chenildieu<\/a><\/li>\n<li><a href=\"#obj-Cochepaille\" class=\"select-object\" data-name=\"Cochepaille\">Cochepaille<\/a><\/li>\n<li><a href=\"#obj-Woman2\" class=\"select-object\" data-name=\"Woman2\">Woman2<\/a><\/li>\n<li><a href=\"#obj-MotherInnocent\" class=\"select-object\" data-name=\"MotherInnocent\">MotherInnocent<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Mlle-Gillenormand\" class=\"select-object\" data-name=\"Mlle.Gillenormand\">Mlle.Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Toussaint\" class=\"select-object\" data-name=\"Toussaint\">Toussaint<\/a><\/li>\n<\/ul>\n"},"Marguerite":{"name":"Marguerite","type":"group3","depends":["Valjean"],"dependedOnBy":["Fantine"],"docs":"<h2>Marguerite <em>Group 3 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<\/ul>\n"},"Mme.deR":{"name":"Mme.deR","type":"group2","depends":["Valjean"],"dependedOnBy":[],"docs":"<h2>Mme.deR <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Isabeau":{"name":"Isabeau","type":"group2","depends":["Valjean"],"dependedOnBy":[],"docs":"<h2>Isabeau <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Gervais":{"name":"Gervais","type":"group2","depends":["Valjean"],"dependedOnBy":[],"docs":"<h2>Gervais <em>Group 2 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>A small boy whom <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> robs shortly after leaving Digne.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Tholomyes":{"name":"Tholomyes","type":"group3","depends":[],"dependedOnBy":["Listolier","Fameuil","Blacheville","Favourite","Dahlia","Zephine","Fantine","Cosette","Marius"],"docs":"<h2>Tholomyes <em>Group 3 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a>\u2019s lover in Paris. Tholomy\u00e8s is a wealthy student who thinks much \nless of his relationship with <a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a> than she does. He gets <a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a> pregnant \nand then abandons her as a joke. Tholomy\u00e8s is <a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a>\u2019s biological father, \nalthough the two never meet.<\/p>\n\n<h3>Depends on <em>(none)<\/em><\/h3>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Listolier\" class=\"select-object\" data-name=\"Listolier\">Listolier<\/a><\/li>\n<li><a href=\"#obj-Fameuil\" class=\"select-object\" data-name=\"Fameuil\">Fameuil<\/a><\/li>\n<li><a href=\"#obj-Blacheville\" class=\"select-object\" data-name=\"Blacheville\">Blacheville<\/a><\/li>\n<li><a href=\"#obj-Favourite\" class=\"select-object\" data-name=\"Favourite\">Favourite<\/a><\/li>\n<li><a href=\"#obj-Dahlia\" class=\"select-object\" data-name=\"Dahlia\">Dahlia<\/a><\/li>\n<li><a href=\"#obj-Zephine\" class=\"select-object\" data-name=\"Zephine\">Zephine<\/a><\/li>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<\/ul>\n"},"Listolier":{"name":"Listolier","type":"group3","depends":["Tholomyes"],"dependedOnBy":["Fameuil","Blacheville","Favourite","Dahlia","Zephine","Fantine"],"docs":"<h2>Listolier <em>Group 3 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Tholomyes\" class=\"select-object\" data-name=\"Tholomyes\">Tholomyes<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Fameuil\" class=\"select-object\" data-name=\"Fameuil\">Fameuil<\/a><\/li>\n<li><a href=\"#obj-Blacheville\" class=\"select-object\" data-name=\"Blacheville\">Blacheville<\/a><\/li>\n<li><a href=\"#obj-Favourite\" class=\"select-object\" data-name=\"Favourite\">Favourite<\/a><\/li>\n<li><a href=\"#obj-Dahlia\" class=\"select-object\" data-name=\"Dahlia\">Dahlia<\/a><\/li>\n<li><a href=\"#obj-Zephine\" class=\"select-object\" data-name=\"Zephine\">Zephine<\/a><\/li>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<\/ul>\n"},"Fameuil":{"name":"Fameuil","type":"group3","depends":["Tholomyes","Listolier"],"dependedOnBy":["Blacheville","Favourite","Dahlia","Zephine","Fantine"],"docs":"<h2>Fameuil <em>Group 3 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Tholomyes\" class=\"select-object\" data-name=\"Tholomyes\">Tholomyes<\/a><\/li>\n<li><a href=\"#obj-Listolier\" class=\"select-object\" data-name=\"Listolier\">Listolier<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Blacheville\" class=\"select-object\" data-name=\"Blacheville\">Blacheville<\/a><\/li>\n<li><a href=\"#obj-Favourite\" class=\"select-object\" data-name=\"Favourite\">Favourite<\/a><\/li>\n<li><a href=\"#obj-Dahlia\" class=\"select-object\" data-name=\"Dahlia\">Dahlia<\/a><\/li>\n<li><a href=\"#obj-Zephine\" class=\"select-object\" data-name=\"Zephine\">Zephine<\/a><\/li>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<\/ul>\n"},"Blacheville":{"name":"Blacheville","type":"group3","depends":["Tholomyes","Listolier","Fameuil"],"dependedOnBy":["Favourite","Dahlia","Zephine","Fantine"],"docs":"<h2>Blacheville <em>Group 3 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Tholomyes\" class=\"select-object\" data-name=\"Tholomyes\">Tholomyes<\/a><\/li>\n<li><a href=\"#obj-Listolier\" class=\"select-object\" data-name=\"Listolier\">Listolier<\/a><\/li>\n<li><a href=\"#obj-Fameuil\" class=\"select-object\" data-name=\"Fameuil\">Fameuil<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Favourite\" class=\"select-object\" data-name=\"Favourite\">Favourite<\/a><\/li>\n<li><a href=\"#obj-Dahlia\" class=\"select-object\" data-name=\"Dahlia\">Dahlia<\/a><\/li>\n<li><a href=\"#obj-Zephine\" class=\"select-object\" data-name=\"Zephine\">Zephine<\/a><\/li>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<\/ul>\n"},"Favourite":{"name":"Favourite","type":"group3","depends":["Tholomyes","Listolier","Fameuil","Blacheville"],"dependedOnBy":["Dahlia","Zephine","Fantine"],"docs":"<h2>Favourite <em>Group 3 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Tholomyes\" class=\"select-object\" data-name=\"Tholomyes\">Tholomyes<\/a><\/li>\n<li><a href=\"#obj-Listolier\" class=\"select-object\" data-name=\"Listolier\">Listolier<\/a><\/li>\n<li><a href=\"#obj-Fameuil\" class=\"select-object\" data-name=\"Fameuil\">Fameuil<\/a><\/li>\n<li><a href=\"#obj-Blacheville\" class=\"select-object\" data-name=\"Blacheville\">Blacheville<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Dahlia\" class=\"select-object\" data-name=\"Dahlia\">Dahlia<\/a><\/li>\n<li><a href=\"#obj-Zephine\" class=\"select-object\" data-name=\"Zephine\">Zephine<\/a><\/li>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<\/ul>\n"},"Dahlia":{"name":"Dahlia","type":"group3","depends":["Tholomyes","Listolier","Fameuil","Blacheville","Favourite"],"dependedOnBy":["Zephine","Fantine"],"docs":"<h2>Dahlia <em>Group 3 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Tholomyes\" class=\"select-object\" data-name=\"Tholomyes\">Tholomyes<\/a><\/li>\n<li><a href=\"#obj-Listolier\" class=\"select-object\" data-name=\"Listolier\">Listolier<\/a><\/li>\n<li><a href=\"#obj-Fameuil\" class=\"select-object\" data-name=\"Fameuil\">Fameuil<\/a><\/li>\n<li><a href=\"#obj-Blacheville\" class=\"select-object\" data-name=\"Blacheville\">Blacheville<\/a><\/li>\n<li><a href=\"#obj-Favourite\" class=\"select-object\" data-name=\"Favourite\">Favourite<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Zephine\" class=\"select-object\" data-name=\"Zephine\">Zephine<\/a><\/li>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<\/ul>\n"},"Zephine":{"name":"Zephine","type":"group3","depends":["Tholomyes","Listolier","Fameuil","Blacheville","Favourite","Dahlia"],"dependedOnBy":["Fantine"],"docs":"<h2>Zephine <em>Group 3 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Tholomyes\" class=\"select-object\" data-name=\"Tholomyes\">Tholomyes<\/a><\/li>\n<li><a href=\"#obj-Listolier\" class=\"select-object\" data-name=\"Listolier\">Listolier<\/a><\/li>\n<li><a href=\"#obj-Fameuil\" class=\"select-object\" data-name=\"Fameuil\">Fameuil<\/a><\/li>\n<li><a href=\"#obj-Blacheville\" class=\"select-object\" data-name=\"Blacheville\">Blacheville<\/a><\/li>\n<li><a href=\"#obj-Favourite\" class=\"select-object\" data-name=\"Favourite\">Favourite<\/a><\/li>\n<li><a href=\"#obj-Dahlia\" class=\"select-object\" data-name=\"Dahlia\">Dahlia<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<\/ul>\n"},"Fantine":{"name":"Fantine","type":"group3","depends":["Tholomyes","Listolier","Fameuil","Blacheville","Favourite","Dahlia","Zephine","Marguerite","Valjean"],"dependedOnBy":["Mme.Thenardier","Thenardier","Javert","Bamatabois","Perpetue","Simplice"],"docs":"<h2>Fantine <em>Group 3 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>A working-class girl who leaves her hometown of Montreuil-sur-mer to seek her \nfortune in Paris. <a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a>\u2019s innocent affair with a dapper student named \nTholomy\u00e8s leaves her pregnant and abandoned. Although she is frail, she makes \na Herculean effort to feed herself and her daughter, <a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a>. Even as she \ndescends into prostitution, she never stops caring for <a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a>. She represents \nthe destruction that nineteenth-century French society cruelly wreaks on the \nless fortunate.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Tholomyes\" class=\"select-object\" data-name=\"Tholomyes\">Tholomyes<\/a><\/li>\n<li><a href=\"#obj-Listolier\" class=\"select-object\" data-name=\"Listolier\">Listolier<\/a><\/li>\n<li><a href=\"#obj-Fameuil\" class=\"select-object\" data-name=\"Fameuil\">Fameuil<\/a><\/li>\n<li><a href=\"#obj-Blacheville\" class=\"select-object\" data-name=\"Blacheville\">Blacheville<\/a><\/li>\n<li><a href=\"#obj-Favourite\" class=\"select-object\" data-name=\"Favourite\">Favourite<\/a><\/li>\n<li><a href=\"#obj-Dahlia\" class=\"select-object\" data-name=\"Dahlia\">Dahlia<\/a><\/li>\n<li><a href=\"#obj-Zephine\" class=\"select-object\" data-name=\"Zephine\">Zephine<\/a><\/li>\n<li><a href=\"#obj-Marguerite\" class=\"select-object\" data-name=\"Marguerite\">Marguerite<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Bamatabois\" class=\"select-object\" data-name=\"Bamatabois\">Bamatabois<\/a><\/li>\n<li><a href=\"#obj-Perpetue\" class=\"select-object\" data-name=\"Perpetue\">Perpetue<\/a><\/li>\n<li><a href=\"#obj-Simplice\" class=\"select-object\" data-name=\"Simplice\">Simplice<\/a><\/li>\n<\/ul>\n"},"Mme.Thenardier":{"name":"Mme.Thenardier","type":"group4","depends":["Fantine","Valjean"],"dependedOnBy":["Thenardier","Gueulemer","Babet","Claquesous","Cosette","Javert","Eponine","Anzelma","Magnon"],"docs":"<h2>Mme.Thenardier <em>Group 4 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>M. Th\u00e9nardier\u2019s wife. Mme. Th\u00e9nardier is just as evil as her husband and \ntakes special pleasure in abusing <a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a>. In later years, she becomes her \nhusband\u2019s most devoted accomplice and is particularly enthusiastic about his \nschemes to rob <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> and <a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a>.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a><\/li>\n<li><a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a><\/li>\n<li><a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a><\/li>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<li><a href=\"#obj-Anzelma\" class=\"select-object\" data-name=\"Anzelma\">Anzelma<\/a><\/li>\n<li><a href=\"#obj-Magnon\" class=\"select-object\" data-name=\"Magnon\">Magnon<\/a><\/li>\n<\/ul>\n"},"Thenardier":{"name":"Thenardier","type":"group4","depends":["Mme.Thenardier","Fantine","Valjean"],"dependedOnBy":["Gueulemer","Babet","Claquesous","Montparnasse","Cosette","Javert","Pontmercy","Boulatruelle","Eponine","Anzelma","Gavroche","Marius","Brujon"],"docs":"<h2>Thenardier <em>Group 4 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>A cruel, wretched, money-obsessed man who first appears as <a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a>\u2019s keeper \nand tormentor. Th\u00e9nardier extorts money from whomever he can, and he \nfrequently serves as an informant to whoever will bid the highest. His schemes \nrange from robbery to fraud to murder, and he has strong ties to the criminal \nunderworld in Paris. Blinded by greed, Th\u00e9nardier is incapable of loving other \nhuman beings and spends every minute in pursuit of money.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a><\/li>\n<li><a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a><\/li>\n<li><a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a><\/li>\n<li><a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a><\/li>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Pontmercy\" class=\"select-object\" data-name=\"Pontmercy\">Pontmercy<\/a><\/li>\n<li><a href=\"#obj-Boulatruelle\" class=\"select-object\" data-name=\"Boulatruelle\">Boulatruelle<\/a><\/li>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<li><a href=\"#obj-Anzelma\" class=\"select-object\" data-name=\"Anzelma\">Anzelma<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-Brujon\" class=\"select-object\" data-name=\"Brujon\">Brujon<\/a><\/li>\n<\/ul>\n"},"Gueulemer":{"name":"Gueulemer","type":"group4","group":"Patron-Minette","depends":["Thenardier","Valjean","Mme.Thenardier","Javert","Gavroche","Eponine"],"dependedOnBy":["Babet","Claquesous","Montparnasse","Brujon"],"docs":"<h2>Gueulemer <em>Group 4 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>Member of Patron-Minette.  Patron-Minette is a Parisian crime ring so \nclose-knit that its four members\u2014<a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a>, <a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a>, <a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a>, and \n<a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a>\u2014are described as four heads of the same violent beast. \nPatron-Minette controls all the crime in one section of Paris and assists in \nthe Th\u00e9nardiers\u2019 ambush of <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a>.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a><\/li>\n<li><a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a><\/li>\n<li><a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a><\/li>\n<li><a href=\"#obj-Brujon\" class=\"select-object\" data-name=\"Brujon\">Brujon<\/a><\/li>\n<\/ul>\n"},"Babet":{"name":"Babet","type":"group4","group":"Patron-Minette","depends":["Thenardier","Gueulemer","Valjean","Mme.Thenardier","Javert","Gavroche","Eponine"],"dependedOnBy":["Claquesous","Montparnasse","Brujon"],"docs":"<h2>Babet <em>Group 4 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>Member of Patron-Minette.  Patron-Minette is a Parisian crime ring so \nclose-knit that its four members\u2014<a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a>, <a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a>, <a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a>, and \n<a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a>\u2014are described as four heads of the same violent beast. \nPatron-Minette controls all the crime in one section of Paris and assists in \nthe Th\u00e9nardiers\u2019 ambush of <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a>.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a><\/li>\n<li><a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a><\/li>\n<li><a href=\"#obj-Brujon\" class=\"select-object\" data-name=\"Brujon\">Brujon<\/a><\/li>\n<\/ul>\n"},"Claquesous":{"name":"Claquesous","type":"group4","group":"Patron-Minette","depends":["Thenardier","Babet","Gueulemer","Valjean","Mme.Thenardier","Javert","Eponine","Enjolras"],"dependedOnBy":["Montparnasse","Brujon"],"docs":"<h2>Claquesous <em>Group 4 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>Member of Patron-Minette.  Patron-Minette is a Parisian crime ring so \nclose-knit that its four members\u2014<a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a>, <a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a>, <a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a>, and \n<a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a>\u2014are described as four heads of the same violent beast. \nPatron-Minette controls all the crime in one section of Paris and assists in \nthe Th\u00e9nardiers\u2019 ambush of <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a>.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a><\/li>\n<li><a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a><\/li>\n<li><a href=\"#obj-Brujon\" class=\"select-object\" data-name=\"Brujon\">Brujon<\/a><\/li>\n<\/ul>\n"},"Montparnasse":{"name":"Montparnasse","type":"group4","group":"Patron-Minette","depends":["Javert","Babet","Gueulemer","Claquesous","Valjean","Gavroche","Eponine","Thenardier"],"dependedOnBy":["Brujon"],"docs":"<h2>Montparnasse <em>Group 4 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>Member of Patron-Minette.  Patron-Minette is a Parisian crime ring so \nclose-knit that its four members\u2014<a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a>, <a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a>, <a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a>, and \n<a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a>\u2014are described as four heads of the same violent beast. \nPatron-Minette controls all the crime in one section of Paris and assists in \nthe Th\u00e9nardiers\u2019 ambush of <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a>.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a><\/li>\n<li><a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a><\/li>\n<li><a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Brujon\" class=\"select-object\" data-name=\"Brujon\">Brujon<\/a><\/li>\n<\/ul>\n"},"Cosette":{"name":"Cosette","type":"group5","depends":["Mme.Thenardier","Valjean","Tholomyes","Thenardier"],"dependedOnBy":["Javert","Woman2","Gillenormand","Mlle.Gillenormand","Lt.Gillenormand","Marius","Toussaint"],"docs":"<h2>Cosette <em>Group 5 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a>\u2019s daughter, who lives as <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a>\u2019s adopted daughter after her \nmother dies. <a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a> spends her childhood as a servant for the Th\u00e9nardiers in \nMontfermeil, but even this awful experience does not make her hardened or \ncynical. Under the care of <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> and the nuns of Petit-Picpus, <a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a> \nultimately blossoms into a beautiful, educated young woman. She finds \nfulfillment in her love for <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a>. <a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a> is innocent and docile, but her \nparticipation in <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a>\u2019s many escapes from the law show that she also \npossesses intelligence and bravery.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Tholomyes\" class=\"select-object\" data-name=\"Tholomyes\">Tholomyes<\/a><\/li>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Woman2\" class=\"select-object\" data-name=\"Woman2\">Woman2<\/a><\/li>\n<li><a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Mlle-Gillenormand\" class=\"select-object\" data-name=\"Mlle.Gillenormand\">Mlle.Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Lt-Gillenormand\" class=\"select-object\" data-name=\"Lt.Gillenormand\">Lt.Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-Toussaint\" class=\"select-object\" data-name=\"Toussaint\">Toussaint<\/a><\/li>\n<\/ul>\n"},"Javert":{"name":"Javert","type":"group4","depends":["Valjean","Fantine","Thenardier","Mme.Thenardier","Cosette"],"dependedOnBy":["Fauchelevent","Gueulemer","Babet","Claquesous","Montparnasse","Bamatabois","Simplice","Woman1","Woman2","Gavroche","Enjolras","Toussaint"],"docs":"<h2>Javert <em>Group 4 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>A police inspector who strictly believes in law and order and will stop at \nnothing to enforce France\u2019s harsh penal codes. <a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a> is incapable of \ncompassion or pity, and performs his work with such passion that he takes on a \nnearly animal quality when he is on the chase. He nurses an especially strong \ndesire to recapture <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a>, whose escapes and prosperity he sees as an affront \nto justice. Ultimately, <a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a> is unable to say with certainty that <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> \ndeserves to be punished. This ambiguity undermines the system of belief on \nwhich <a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a> bases his life and forces him to choose between hypocrisy and \nhonor.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Fauchelevent\" class=\"select-object\" data-name=\"Fauchelevent\">Fauchelevent<\/a><\/li>\n<li><a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a><\/li>\n<li><a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a><\/li>\n<li><a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a><\/li>\n<li><a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a><\/li>\n<li><a href=\"#obj-Bamatabois\" class=\"select-object\" data-name=\"Bamatabois\">Bamatabois<\/a><\/li>\n<li><a href=\"#obj-Simplice\" class=\"select-object\" data-name=\"Simplice\">Simplice<\/a><\/li>\n<li><a href=\"#obj-Woman1\" class=\"select-object\" data-name=\"Woman1\">Woman1<\/a><\/li>\n<li><a href=\"#obj-Woman2\" class=\"select-object\" data-name=\"Woman2\">Woman2<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Toussaint\" class=\"select-object\" data-name=\"Toussaint\">Toussaint<\/a><\/li>\n<\/ul>\n"},"Bamatabois":{"name":"Bamatabois","type":"group2","depends":["Fantine","Javert","Valjean"],"dependedOnBy":["Judge","Champmathieu","Brevet","Chenildieu","Cochepaille"],"docs":"<h2>Bamatabois <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Judge\" class=\"select-object\" data-name=\"Judge\">Judge<\/a><\/li>\n<li><a href=\"#obj-Champmathieu\" class=\"select-object\" data-name=\"Champmathieu\">Champmathieu<\/a><\/li>\n<li><a href=\"#obj-Brevet\" class=\"select-object\" data-name=\"Brevet\">Brevet<\/a><\/li>\n<li><a href=\"#obj-Chenildieu\" class=\"select-object\" data-name=\"Chenildieu\">Chenildieu<\/a><\/li>\n<li><a href=\"#obj-Cochepaille\" class=\"select-object\" data-name=\"Cochepaille\">Cochepaille<\/a><\/li>\n<\/ul>\n"},"Perpetue":{"name":"Perpetue","type":"group3","depends":["Fantine"],"dependedOnBy":["Simplice"],"docs":"<h2>Perpetue <em>Group 3 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Simplice\" class=\"select-object\" data-name=\"Simplice\">Simplice<\/a><\/li>\n<\/ul>\n"},"Simplice":{"name":"Simplice","type":"group2","depends":["Perpetue","Valjean","Fantine","Javert"],"dependedOnBy":[],"docs":"<h2>Simplice <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Perpetue\" class=\"select-object\" data-name=\"Perpetue\">Perpetue<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Fantine\" class=\"select-object\" data-name=\"Fantine\">Fantine<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Scaufflaire":{"name":"Scaufflaire","type":"group2","depends":["Valjean"],"dependedOnBy":[],"docs":"<h2>Scaufflaire <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Woman1":{"name":"Woman1","type":"group2","depends":["Valjean","Javert"],"dependedOnBy":[],"docs":"<h2>Woman1 <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Judge":{"name":"Judge","type":"group2","depends":["Valjean","Bamatabois"],"dependedOnBy":["Champmathieu","Brevet","Chenildieu","Cochepaille"],"docs":"<h2>Judge <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Bamatabois\" class=\"select-object\" data-name=\"Bamatabois\">Bamatabois<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Champmathieu\" class=\"select-object\" data-name=\"Champmathieu\">Champmathieu<\/a><\/li>\n<li><a href=\"#obj-Brevet\" class=\"select-object\" data-name=\"Brevet\">Brevet<\/a><\/li>\n<li><a href=\"#obj-Chenildieu\" class=\"select-object\" data-name=\"Chenildieu\">Chenildieu<\/a><\/li>\n<li><a href=\"#obj-Cochepaille\" class=\"select-object\" data-name=\"Cochepaille\">Cochepaille<\/a><\/li>\n<\/ul>\n"},"Champmathieu":{"name":"Champmathieu","type":"group2","depends":["Valjean","Judge","Bamatabois"],"dependedOnBy":["Brevet","Chenildieu","Cochepaille"],"docs":"<h2>Champmathieu <em>Group 2 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>A poor, uneducated man who unfortunately resembles <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a> so much that he is \nidentified, tried, and almost convicted as <a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a>. <a href=\"#obj-Champmathieu\" class=\"select-object\" data-name=\"Champmathieu\">Champmathieu<\/a> proves to be \ntoo dim-witted to defend himself successfully, revealing the callousness of the \nFrench justice system.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Judge\" class=\"select-object\" data-name=\"Judge\">Judge<\/a><\/li>\n<li><a href=\"#obj-Bamatabois\" class=\"select-object\" data-name=\"Bamatabois\">Bamatabois<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Brevet\" class=\"select-object\" data-name=\"Brevet\">Brevet<\/a><\/li>\n<li><a href=\"#obj-Chenildieu\" class=\"select-object\" data-name=\"Chenildieu\">Chenildieu<\/a><\/li>\n<li><a href=\"#obj-Cochepaille\" class=\"select-object\" data-name=\"Cochepaille\">Cochepaille<\/a><\/li>\n<\/ul>\n"},"Brevet":{"name":"Brevet","type":"group2","depends":["Judge","Champmathieu","Valjean","Bamatabois"],"dependedOnBy":["Chenildieu","Cochepaille"],"docs":"<h2>Brevet <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Judge\" class=\"select-object\" data-name=\"Judge\">Judge<\/a><\/li>\n<li><a href=\"#obj-Champmathieu\" class=\"select-object\" data-name=\"Champmathieu\">Champmathieu<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Bamatabois\" class=\"select-object\" data-name=\"Bamatabois\">Bamatabois<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Chenildieu\" class=\"select-object\" data-name=\"Chenildieu\">Chenildieu<\/a><\/li>\n<li><a href=\"#obj-Cochepaille\" class=\"select-object\" data-name=\"Cochepaille\">Cochepaille<\/a><\/li>\n<\/ul>\n"},"Chenildieu":{"name":"Chenildieu","type":"group2","depends":["Judge","Champmathieu","Brevet","Valjean","Bamatabois"],"dependedOnBy":["Cochepaille"],"docs":"<h2>Chenildieu <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Judge\" class=\"select-object\" data-name=\"Judge\">Judge<\/a><\/li>\n<li><a href=\"#obj-Champmathieu\" class=\"select-object\" data-name=\"Champmathieu\">Champmathieu<\/a><\/li>\n<li><a href=\"#obj-Brevet\" class=\"select-object\" data-name=\"Brevet\">Brevet<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Bamatabois\" class=\"select-object\" data-name=\"Bamatabois\">Bamatabois<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Cochepaille\" class=\"select-object\" data-name=\"Cochepaille\">Cochepaille<\/a><\/li>\n<\/ul>\n"},"Cochepaille":{"name":"Cochepaille","type":"group2","depends":["Judge","Champmathieu","Brevet","Chenildieu","Valjean","Bamatabois"],"dependedOnBy":[],"docs":"<h2>Cochepaille <em>Group 2 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Judge\" class=\"select-object\" data-name=\"Judge\">Judge<\/a><\/li>\n<li><a href=\"#obj-Champmathieu\" class=\"select-object\" data-name=\"Champmathieu\">Champmathieu<\/a><\/li>\n<li><a href=\"#obj-Brevet\" class=\"select-object\" data-name=\"Brevet\">Brevet<\/a><\/li>\n<li><a href=\"#obj-Chenildieu\" class=\"select-object\" data-name=\"Chenildieu\">Chenildieu<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Bamatabois\" class=\"select-object\" data-name=\"Bamatabois\">Bamatabois<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Pontmercy":{"name":"Pontmercy","type":"group4","depends":["Thenardier"],"dependedOnBy":["Mme.Pontmercy","Marius"],"docs":"<h2>Pontmercy <em>Group 4 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>An officer in Napol\u00e9on\u2019s army and <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a>\u2019s father. <a href=\"#obj-Pontmercy\" class=\"select-object\" data-name=\"Pontmercy\">Pontmercy<\/a> is severely \nwounded at the Battle of Waterloo, and mistakenly believing that Th\u00e9nardier \nhas saved his life, he asks that <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a> honor this debt. Although we know \nlittle about <a href=\"#obj-Pontmercy\" class=\"select-object\" data-name=\"Pontmercy\">Pontmercy<\/a>\u2019s personal life, his politics greatly influence the \nyoung <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a>.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mme-Pontmercy\" class=\"select-object\" data-name=\"Mme.Pontmercy\">Mme.Pontmercy<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<\/ul>\n"},"Boulatruelle":{"name":"Boulatruelle","type":"group6","depends":["Thenardier"],"dependedOnBy":[],"docs":"<h2>Boulatruelle <em>Group 6 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Eponine":{"name":"Eponine","type":"group4","depends":["Mme.Thenardier","Thenardier"],"dependedOnBy":["Gueulemer","Babet","Claquesous","Montparnasse","Anzelma","Marius","Mabeuf","Courfeyrac","Brujon"],"docs":"<h2>Eponine <em>Group 4 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>The Th\u00e9nardiers\u2019 eldest daughter. <a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a> is a wretched creature who helps \nher parents steal, but she is eventually redeemed by her love for <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a>. She \nproves that no one is beyond redemption, and she ultimately emerges as one of \nthe novel\u2019s most tragic and heroic figures.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a><\/li>\n<li><a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a><\/li>\n<li><a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a><\/li>\n<li><a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a><\/li>\n<li><a href=\"#obj-Anzelma\" class=\"select-object\" data-name=\"Anzelma\">Anzelma<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Brujon\" class=\"select-object\" data-name=\"Brujon\">Brujon<\/a><\/li>\n<\/ul>\n"},"Anzelma":{"name":"Anzelma","type":"group4","depends":["Eponine","Thenardier","Mme.Thenardier"],"dependedOnBy":[],"docs":"<h2>Anzelma <em>Group 4 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Woman2":{"name":"Woman2","type":"group5","depends":["Valjean","Cosette","Javert"],"dependedOnBy":[],"docs":"<h2>Woman2 <em>Group 5 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"MotherInnocent":{"name":"MotherInnocent","type":"group0","depends":["Fauchelevent","Valjean"],"dependedOnBy":[],"docs":"<h2>MotherInnocent <em>Group 0 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Fauchelevent\" class=\"select-object\" data-name=\"Fauchelevent\">Fauchelevent<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Gribier":{"name":"Gribier","type":"group0","depends":["Fauchelevent"],"dependedOnBy":[],"docs":"<h2>Gribier <em>Group 0 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Fauchelevent\" class=\"select-object\" data-name=\"Fauchelevent\">Fauchelevent<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Jondrette":{"name":"Jondrette","type":"group7","depends":[],"dependedOnBy":["Mme.Burgon"],"docs":"<h2>Jondrette <em>Group 7 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on <em>(none)<\/em><\/h3>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mme-Burgon\" class=\"select-object\" data-name=\"Mme.Burgon\">Mme.Burgon<\/a><\/li>\n<\/ul>\n"},"Mme.Burgon":{"name":"Mme.Burgon","type":"group7","depends":["Jondrette"],"dependedOnBy":["Gavroche"],"docs":"<h2>Mme.Burgon <em>Group 7 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Jondrette\" class=\"select-object\" data-name=\"Jondrette\">Jondrette<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<\/ul>\n"},"Gavroche":{"name":"Gavroche","type":"group8","depends":["Mme.Burgon","Thenardier","Javert","Valjean"],"dependedOnBy":["Gueulemer","Babet","Montparnasse","Marius","Mabeuf","Enjolras","Combeferre","Prouvaire","Feuilly","Courfeyrac","Bahorel","Bossuet","Joly","Grantaire","Child1","Child2","Brujon","Mme.Hucheloup"],"docs":"<h2>Gavroche <em>Group 8 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>The Th\u00e9nardiers\u2019 oldest son. <a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a> is kicked out of the house at an early \nage and becomes a Parisian street urchin. He is a happy-go-lucky child who \nenjoys the small pleasures of life and demonstrates unusual generosity toward \nthose even less fortunate than he is. He is also fierce and brave, and plays a \ndecisive role in the barricade even though he does not have a gun.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mme-Burgon\" class=\"select-object\" data-name=\"Mme.Burgon\">Mme.Burgon<\/a><\/li>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a><\/li>\n<li><a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a><\/li>\n<li><a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<li><a href=\"#obj-Prouvaire\" class=\"select-object\" data-name=\"Prouvaire\">Prouvaire<\/a><\/li>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-Grantaire\" class=\"select-object\" data-name=\"Grantaire\">Grantaire<\/a><\/li>\n<li><a href=\"#obj-Child1\" class=\"select-object\" data-name=\"Child1\">Child1<\/a><\/li>\n<li><a href=\"#obj-Child2\" class=\"select-object\" data-name=\"Child2\">Child2<\/a><\/li>\n<li><a href=\"#obj-Brujon\" class=\"select-object\" data-name=\"Brujon\">Brujon<\/a><\/li>\n<li><a href=\"#obj-Mme-Hucheloup\" class=\"select-object\" data-name=\"Mme.Hucheloup\">Mme.Hucheloup<\/a><\/li>\n<\/ul>\n"},"Gillenormand":{"name":"Gillenormand","type":"group5","depends":["Cosette","Valjean"],"dependedOnBy":["Magnon","Mlle.Gillenormand","Lt.Gillenormand","Marius","BaronessT"],"docs":"<h2>Gillenormand <em>Group 5 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a>\u2019s ninety-year-old maternal grandfather. <a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a> prevents <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a> \nfrom seeing his father, Georges <a href=\"#obj-Pontmercy\" class=\"select-object\" data-name=\"Pontmercy\">Pontmercy<\/a>, because he fears that <a href=\"#obj-Pontmercy\" class=\"select-object\" data-name=\"Pontmercy\">Pontmercy<\/a> will \ncorrupt <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a>. A devout monarchist, <a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a> rejects the French Revolution \noutright and also rejects <a href=\"#obj-Pontmercy\" class=\"select-object\" data-name=\"Pontmercy\">Pontmercy<\/a>\u2019s Napol\u00e9onic beliefs. Although \n<a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a>\u2019s classist views sometimes offend <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a>, he truly loves his \ngrandson and ultimately does what is necessary to make <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a> happy.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Magnon\" class=\"select-object\" data-name=\"Magnon\">Magnon<\/a><\/li>\n<li><a href=\"#obj-Mlle-Gillenormand\" class=\"select-object\" data-name=\"Mlle.Gillenormand\">Mlle.Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Lt-Gillenormand\" class=\"select-object\" data-name=\"Lt.Gillenormand\">Lt.Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-BaronessT\" class=\"select-object\" data-name=\"BaronessT\">BaronessT<\/a><\/li>\n<\/ul>\n"},"Magnon":{"name":"Magnon","type":"group5","depends":["Gillenormand","Mme.Thenardier"],"dependedOnBy":[],"docs":"<h2>Magnon <em>Group 5 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Mme-Thenardier\" class=\"select-object\" data-name=\"Mme.Thenardier\">Mme.Thenardier<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Mlle.Gillenormand":{"name":"Mlle.Gillenormand","type":"group5","depends":["Gillenormand","Cosette","Valjean"],"dependedOnBy":["Mme.Pontmercy","Mlle.Vaubois","Lt.Gillenormand","Marius"],"docs":"<h2>Mlle.Gillenormand <em>Group 5 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mme-Pontmercy\" class=\"select-object\" data-name=\"Mme.Pontmercy\">Mme.Pontmercy<\/a><\/li>\n<li><a href=\"#obj-Mlle-Vaubois\" class=\"select-object\" data-name=\"Mlle.Vaubois\">Mlle.Vaubois<\/a><\/li>\n<li><a href=\"#obj-Lt-Gillenormand\" class=\"select-object\" data-name=\"Lt.Gillenormand\">Lt.Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<\/ul>\n"},"Mme.Pontmercy":{"name":"Mme.Pontmercy","type":"group5","depends":["Mlle.Gillenormand","Pontmercy"],"dependedOnBy":[],"docs":"<h2>Mme.Pontmercy <em>Group 5 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mlle-Gillenormand\" class=\"select-object\" data-name=\"Mlle.Gillenormand\">Mlle.Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Pontmercy\" class=\"select-object\" data-name=\"Pontmercy\">Pontmercy<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Mlle.Vaubois":{"name":"Mlle.Vaubois","type":"group5","depends":["Mlle.Gillenormand"],"dependedOnBy":[],"docs":"<h2>Mlle.Vaubois <em>Group 5 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mlle-Gillenormand\" class=\"select-object\" data-name=\"Mlle.Gillenormand\">Mlle.Gillenormand<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Lt.Gillenormand":{"name":"Lt.Gillenormand","type":"group5","depends":["Mlle.Gillenormand","Gillenormand","Cosette"],"dependedOnBy":["Marius"],"docs":"<h2>Lt.Gillenormand <em>Group 5 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mlle-Gillenormand\" class=\"select-object\" data-name=\"Mlle.Gillenormand\">Mlle.Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<\/ul>\n"},"Marius":{"name":"Marius","type":"group8","depends":["Mlle.Gillenormand","Gillenormand","Pontmercy","Lt.Gillenormand","Cosette","Valjean","Tholomyes","Thenardier","Eponine","Gavroche"],"dependedOnBy":["BaronessT","Mabeuf","Enjolras","Combeferre","Feuilly","Courfeyrac","Bahorel","Bossuet","Joly"],"docs":"<h2>Marius <em>Group 8 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>The son of Georges <a href=\"#obj-Pontmercy\" class=\"select-object\" data-name=\"Pontmercy\">Pontmercy<\/a>, a colonel in Napol\u00e9on\u2019s army. <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a> grows up \nin the home of his grandfather, M. <a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a>, a monarchist. <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a> has an \nidentity crisis when he learns the real reason for his separation from his \nfather, and this crisis sets him on the path to discovering himself. An \ninnocent young man, <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a> is nonetheless capable of great things and manages \nboth to fight on the barricades and successfully court the love of his life, \n<a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a>.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mlle-Gillenormand\" class=\"select-object\" data-name=\"Mlle.Gillenormand\">Mlle.Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Pontmercy\" class=\"select-object\" data-name=\"Pontmercy\">Pontmercy<\/a><\/li>\n<li><a href=\"#obj-Lt-Gillenormand\" class=\"select-object\" data-name=\"Lt.Gillenormand\">Lt.Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<li><a href=\"#obj-Tholomyes\" class=\"select-object\" data-name=\"Tholomyes\">Tholomyes<\/a><\/li>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-BaronessT\" class=\"select-object\" data-name=\"BaronessT\">BaronessT<\/a><\/li>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<\/ul>\n"},"BaronessT":{"name":"BaronessT","type":"group5","depends":["Gillenormand","Marius"],"dependedOnBy":[],"docs":"<h2>BaronessT <em>Group 5 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gillenormand\" class=\"select-object\" data-name=\"Gillenormand\">Gillenormand<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Mabeuf":{"name":"Mabeuf","type":"group8","depends":["Marius","Eponine","Gavroche"],"dependedOnBy":["Enjolras","Combeferre","Feuilly","Courfeyrac","Bahorel","Bossuet","Joly","MotherPlutarch"],"docs":"<h2>Mabeuf <em>Group 8 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>A churchwarden in Paris who tells <a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a> the truth about his father. <a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a> and \n<a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a> become friends during tough times, and <a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a> later dies a heroic death \non the barricade.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-MotherPlutarch\" class=\"select-object\" data-name=\"MotherPlutarch\">MotherPlutarch<\/a><\/li>\n<\/ul>\n"},"Enjolras":{"name":"Enjolras","type":"group8","depends":["Marius","Gavroche","Javert","Mabeuf","Valjean"],"dependedOnBy":["Claquesous","Combeferre","Prouvaire","Feuilly","Courfeyrac","Bahorel","Bossuet","Joly","Grantaire","Mme.Hucheloup"],"docs":"<h2>Enjolras <em>Group 8 long name for docs<\/em><\/h2>\n\n<h3>Documentation<\/h3>\n\n<p>The leader of the Friends of the ABC. <a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a> is a radical student \nrevolutionary. He is both wild and beautiful. Together with Courfeyrac and \n<a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a>, <a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a> leads the insurrection at the barricade.<\/p>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a><\/li>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<li><a href=\"#obj-Prouvaire\" class=\"select-object\" data-name=\"Prouvaire\">Prouvaire<\/a><\/li>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-Grantaire\" class=\"select-object\" data-name=\"Grantaire\">Grantaire<\/a><\/li>\n<li><a href=\"#obj-Mme-Hucheloup\" class=\"select-object\" data-name=\"Mme.Hucheloup\">Mme.Hucheloup<\/a><\/li>\n<\/ul>\n"},"Combeferre":{"name":"Combeferre","type":"group8","depends":["Enjolras","Marius","Gavroche","Mabeuf"],"dependedOnBy":["Prouvaire","Feuilly","Courfeyrac","Bahorel","Bossuet","Joly","Grantaire"],"docs":"<h2>Combeferre <em>Group 8 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Prouvaire\" class=\"select-object\" data-name=\"Prouvaire\">Prouvaire<\/a><\/li>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-Grantaire\" class=\"select-object\" data-name=\"Grantaire\">Grantaire<\/a><\/li>\n<\/ul>\n"},"Prouvaire":{"name":"Prouvaire","type":"group8","depends":["Gavroche","Enjolras","Combeferre"],"dependedOnBy":["Feuilly","Courfeyrac","Bahorel","Bossuet","Joly","Grantaire"],"docs":"<h2>Prouvaire <em>Group 8 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-Grantaire\" class=\"select-object\" data-name=\"Grantaire\">Grantaire<\/a><\/li>\n<\/ul>\n"},"Feuilly":{"name":"Feuilly","type":"group8","depends":["Gavroche","Enjolras","Prouvaire","Combeferre","Mabeuf","Marius"],"dependedOnBy":["Courfeyrac","Bahorel","Bossuet","Joly","Grantaire"],"docs":"<h2>Feuilly <em>Group 8 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Prouvaire\" class=\"select-object\" data-name=\"Prouvaire\">Prouvaire<\/a><\/li>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-Grantaire\" class=\"select-object\" data-name=\"Grantaire\">Grantaire<\/a><\/li>\n<\/ul>\n"},"Courfeyrac":{"name":"Courfeyrac","type":"group8","depends":["Marius","Enjolras","Combeferre","Gavroche","Mabeuf","Eponine","Feuilly","Prouvaire"],"dependedOnBy":["Bahorel","Bossuet","Joly","Grantaire","Mme.Hucheloup"],"docs":"<h2>Courfeyrac <em>Group 8 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Prouvaire\" class=\"select-object\" data-name=\"Prouvaire\">Prouvaire<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-Grantaire\" class=\"select-object\" data-name=\"Grantaire\">Grantaire<\/a><\/li>\n<li><a href=\"#obj-Mme-Hucheloup\" class=\"select-object\" data-name=\"Mme.Hucheloup\">Mme.Hucheloup<\/a><\/li>\n<\/ul>\n"},"Bahorel":{"name":"Bahorel","type":"group8","depends":["Combeferre","Gavroche","Courfeyrac","Mabeuf","Enjolras","Feuilly","Prouvaire","Marius"],"dependedOnBy":["Bossuet","Joly","Grantaire","Mme.Hucheloup"],"docs":"<h2>Bahorel <em>Group 8 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Prouvaire\" class=\"select-object\" data-name=\"Prouvaire\">Prouvaire<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-Grantaire\" class=\"select-object\" data-name=\"Grantaire\">Grantaire<\/a><\/li>\n<li><a href=\"#obj-Mme-Hucheloup\" class=\"select-object\" data-name=\"Mme.Hucheloup\">Mme.Hucheloup<\/a><\/li>\n<\/ul>\n"},"Bossuet":{"name":"Bossuet","type":"group8","depends":["Marius","Courfeyrac","Gavroche","Bahorel","Enjolras","Feuilly","Prouvaire","Combeferre","Mabeuf","Valjean"],"dependedOnBy":["Joly","Grantaire","Mme.Hucheloup"],"docs":"<h2>Bossuet <em>Group 8 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Prouvaire\" class=\"select-object\" data-name=\"Prouvaire\">Prouvaire<\/a><\/li>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-Grantaire\" class=\"select-object\" data-name=\"Grantaire\">Grantaire<\/a><\/li>\n<li><a href=\"#obj-Mme-Hucheloup\" class=\"select-object\" data-name=\"Mme.Hucheloup\">Mme.Hucheloup<\/a><\/li>\n<\/ul>\n"},"Joly":{"name":"Joly","type":"group8","depends":["Bahorel","Bossuet","Gavroche","Courfeyrac","Enjolras","Feuilly","Prouvaire","Combeferre","Mabeuf","Marius"],"dependedOnBy":["Grantaire","Mme.Hucheloup"],"docs":"<h2>Joly <em>Group 8 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Prouvaire\" class=\"select-object\" data-name=\"Prouvaire\">Prouvaire<\/a><\/li>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<li><a href=\"#obj-Marius\" class=\"select-object\" data-name=\"Marius\">Marius<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Grantaire\" class=\"select-object\" data-name=\"Grantaire\">Grantaire<\/a><\/li>\n<li><a href=\"#obj-Mme-Hucheloup\" class=\"select-object\" data-name=\"Mme.Hucheloup\">Mme.Hucheloup<\/a><\/li>\n<\/ul>\n"},"Grantaire":{"name":"Grantaire","type":"group8","depends":["Bossuet","Enjolras","Combeferre","Courfeyrac","Joly","Gavroche","Bahorel","Feuilly","Prouvaire"],"dependedOnBy":["Mme.Hucheloup"],"docs":"<h2>Grantaire <em>Group 8 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<li><a href=\"#obj-Combeferre\" class=\"select-object\" data-name=\"Combeferre\">Combeferre<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Feuilly\" class=\"select-object\" data-name=\"Feuilly\">Feuilly<\/a><\/li>\n<li><a href=\"#obj-Prouvaire\" class=\"select-object\" data-name=\"Prouvaire\">Prouvaire<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mme-Hucheloup\" class=\"select-object\" data-name=\"Mme.Hucheloup\">Mme.Hucheloup<\/a><\/li>\n<\/ul>\n"},"MotherPlutarch":{"name":"MotherPlutarch","type":"group9","depends":["Mabeuf"],"dependedOnBy":[],"docs":"<h2>MotherPlutarch <em>Group 9 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Mabeuf\" class=\"select-object\" data-name=\"Mabeuf\">Mabeuf<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Toussaint":{"name":"Toussaint","type":"group5","depends":["Cosette","Javert","Valjean"],"dependedOnBy":[],"docs":"<h2>Toussaint <em>Group 5 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Cosette\" class=\"select-object\" data-name=\"Cosette\">Cosette<\/a><\/li>\n<li><a href=\"#obj-Javert\" class=\"select-object\" data-name=\"Javert\">Javert<\/a><\/li>\n<li><a href=\"#obj-Valjean\" class=\"select-object\" data-name=\"Valjean\">Valjean<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Child1":{"name":"Child1","type":"group10","depends":["Gavroche"],"dependedOnBy":["Child2"],"docs":"<h2>Child1 <em>Group 10 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by<\/h3>\n\n<ul>\n<li><a href=\"#obj-Child2\" class=\"select-object\" data-name=\"Child2\">Child2<\/a><\/li>\n<\/ul>\n"},"Child2":{"name":"Child2","type":"group10","depends":["Gavroche","Child1"],"dependedOnBy":[],"docs":"<h2>Child2 <em>Group 10 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Child1\" class=\"select-object\" data-name=\"Child1\">Child1<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Brujon":{"name":"Brujon","type":"group4","depends":["Babet","Gueulemer","Thenardier","Gavroche","Eponine","Claquesous","Montparnasse"],"dependedOnBy":[],"docs":"<h2>Brujon <em>Group 4 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Babet\" class=\"select-object\" data-name=\"Babet\">Babet<\/a><\/li>\n<li><a href=\"#obj-Gueulemer\" class=\"select-object\" data-name=\"Gueulemer\">Gueulemer<\/a><\/li>\n<li><a href=\"#obj-Thenardier\" class=\"select-object\" data-name=\"Thenardier\">Thenardier<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Eponine\" class=\"select-object\" data-name=\"Eponine\">Eponine<\/a><\/li>\n<li><a href=\"#obj-Claquesous\" class=\"select-object\" data-name=\"Claquesous\">Claquesous<\/a><\/li>\n<li><a href=\"#obj-Montparnasse\" class=\"select-object\" data-name=\"Montparnasse\">Montparnasse<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"},"Mme.Hucheloup":{"name":"Mme.Hucheloup","type":"group8","depends":["Bossuet","Joly","Grantaire","Bahorel","Courfeyrac","Gavroche","Enjolras"],"dependedOnBy":[],"docs":"<h2>Mme.Hucheloup <em>Group 8 long name for docs<\/em><\/h2>\n\n<div class=\"alert alert-warning\">No documentation for this object<\/div>\n\n<h3>Depends on<\/h3>\n\n<ul>\n<li><a href=\"#obj-Bossuet\" class=\"select-object\" data-name=\"Bossuet\">Bossuet<\/a><\/li>\n<li><a href=\"#obj-Joly\" class=\"select-object\" data-name=\"Joly\">Joly<\/a><\/li>\n<li><a href=\"#obj-Grantaire\" class=\"select-object\" data-name=\"Grantaire\">Grantaire<\/a><\/li>\n<li><a href=\"#obj-Bahorel\" class=\"select-object\" data-name=\"Bahorel\">Bahorel<\/a><\/li>\n<li><a href=\"#obj-Courfeyrac\" class=\"select-object\" data-name=\"Courfeyrac\">Courfeyrac<\/a><\/li>\n<li><a href=\"#obj-Gavroche\" class=\"select-object\" data-name=\"Gavroche\">Gavroche<\/a><\/li>\n<li><a href=\"#obj-Enjolras\" class=\"select-object\" data-name=\"Enjolras\">Enjolras<\/a><\/li>\n<\/ul>\n\n<h3>Depended on by <em>(none)<\/em><\/h3>\n"}}
//graph.data = {"Fauchelevent": {"name":"Fauchelevent","type":"group0","depends":[],"dependedOnBy":[],},}
graph.data = this.props.data;

    graph.margin = {
        top    : 20,
        right  : 20,
        bottom : 20,
        left   : 20
    };

    var display = $('#graph').css('display');
    $('#graph')
        .css('display', 'block')
        .css('height', config.graph.height + 'px');
    graph.width  = 800; //$('#graph').width()  - graph.margin.left - graph.margin.right;
    graph.height = 600;//$('#graph').height() - graph.margin.top  - graph.margin.bottom;
    $('#graph').css('display', display);


    var div = d3.select("#graph").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .style("position", "absolute");

    for (var name in graph.data) {
        var obj = graph.data[name];
        obj.positionConstraints = [];
        obj.linkStrength        = 1;

        config.constraints.forEach(function(c) {
            for (var k in c.has) {
                if (c.has[k] !== obj[k]) {
                    return true;
                }
            }

            switch (c.type) {
                case 'position':
                    obj.positionConstraints.push({
                        weight : c.weight,
                        x      : c.x * graph.width,
                        y      : c.y * graph.height
                    });
                    break;

                case 'linkStrength':
                    obj.linkStrength *= c.strength;
                    break;
            }
        });
    }

    graph.links = [];
    for (var name in graph.data) {
        var obj = graph.data[name];
        obj.depends.forEach((depends) => {
            var link = {
                source : graph.data.find(function r(i){return i.IP === depends}),
                target : obj
            };
            link.strength = (link.source.linkStrength || 1)
                          * (link.target.linkStrength || 1);
            graph.links.push(link);
        });
    }

    graph.categories = {};
    for (var name in graph.data) {
        var obj = graph.data[name],
            key = obj.type + ':' + (obj.group || ''),
            cat = graph.categories[key];

        obj.categoryKey = key;
        if (!cat) {
            cat = graph.categories[key] = {
                key      : key,
                type     : obj.type,
                typeName : (config.types[obj.type]
                            ? config.types[obj.type].short
                            : obj.type),
                group    : obj.group,
                count    : 0
            };
        }
        cat.count++;
    }
    graph.categoryKeys = d3.keys(graph.categories);

    graph.colors = colorbrewer.Set3[config.graph.numColors];

    function getColorScale(darkness) {
        return d3.scale.ordinal()
            .domain(graph.categoryKeys)
            .range(graph.colors.map(function(c) {
                return d3.hsl(c).darker(darkness).toString();
            }));
    }

    graph.strokeColor = getColorScale( 0.1);
    graph.strokeColorActive = getColorScale( 0.8);
    graph.fillColorActive   = getColorScale(-0.1);
        graph.fillColor   = getColorScale(-0.3);

    graph.nodeValues = d3.values(graph.data);

    graph.force = d3.layout.force()
        .nodes(graph.nodeValues)
        .links(graph.links)
        .linkStrength(function(d) { return d.strength; })
        .size([graph.width, graph.height])
        .linkDistance(config.graph.linkDistance)
        .charge(config.graph.charge)
        .on('tick', tick)


   function tick(e) {
        graph.numTicks++;

        for (var name in graph.data) {
            var obj = graph.data[name];

            obj.positionConstraints.forEach(function(c) {
                var w = c.weight * e.alpha;
                if (!isNaN(c.x)) {
                    obj.x = (c.x * w + obj.x * (1 - w));
                }
                if (!isNaN(c.y)) {
                    obj.y = (c.y * w + obj.y * (1 - w));
                }
            });
        }

        if (graph.preventCollisions) {
            //that.preventCollisions();
        }

        graph.line
            .attr('x1', function(d) {
                return d.source.x;
            })
            .attr('y1', function(d) {
                return d.source.y;
            })
            .each(function(d) {

                var x    = d.target.x,
                    y    = d.target.y,
                    line = new LineSegment(d.source.x, d.source.y, x, y);

                 for (var e in d.target.edge) {
                     var ix = line.intersect(d.target.edge[e].offset(x, y));
                    if (ix.in1 && ix.in2) {
                        x = ix.x;
                        y = ix.y;
                        break;
                    }
                 }

                d3.select(this)
                    .attr('x2', x)
                    .attr('y2', y);
            });

        graph.node
            .attr('transform', function(d) {
                return 'translate(' + d.x + ',' + d.y + ')';
});
    }


    graph.svg = d3.select('#graph').append('svg')
        .attr('width' , graph.width  + graph.margin.left + graph.margin.right)
        .attr('height', graph.height + graph.margin.top  + graph.margin.bottom)
      .append('g')
        .attr('transform', 'translate(' + graph.margin.left + ',' + graph.margin.top + ')');

    graph.svg.append('defs').selectAll('marker')
        .data(['end'])
      .enter().append('marker')
        .attr('id'          , String)
        .attr('viewBox'     , '0 -5 10 10')
        .attr('refX'        , 10)
        .attr('refY'        , 0)
        .attr('markerWidth' , 6)
        .attr('markerHeight', 6)
        .attr('orient'      , 'auto')
      .append('path')
        .attr('d', 'M0,-5L10,0L0,5');

    // adapted from http://stackoverflow.com/questions/9630008
    // and http://stackoverflow.com/questions/17883655

    var glow = graph.svg.append('filter')
        .attr('x'     , '-50%')
        .attr('y'     , '-50%')
        .attr('width' , '200%')
        .attr('height', '200%')
        .attr('id'    , 'blue-glow');

    glow.append('feColorMatrix')
        .attr('type'  , 'matrix')
        .attr('values', '0 0 0 0  0 '
                      + '0 0 0 0  0 '
                      + '0 0 0 0  .7 '
                      + '0 0 0 1  0 ');

    glow.append('feGaussianBlur')
        .attr('stdDeviation', 6)
        .attr('result'      , 'coloredBlur');

    glow.append('feMerge').selectAll('feMergeNode')
        .data(['coloredBlur', 'SourceGraphic'])
      .enter().append('feMergeNode')
        .attr('in', String);

    /*graph.legend = graph.svg.append('g')
        .attr('class', 'legend')
        .attr('x', 0)
        .attr('y', 0)
      .selectAll('.category')
        .data(d3.values(graph.categories))
      .enter().append('g')
        .attr('class', 'category');

    graph.legendConfig = {
        rectWidth   : 12,
        rectHeight  : 12,
        xOffset     : -10,
        yOffset     : 30,
        xOffsetText : 20,
        yOffsetText : 10,
        lineHeight  : 15
    };
    graph.legendConfig.xOffsetText += graph.legendConfig.xOffset;
    graph.legendConfig.yOffsetText += graph.legendConfig.yOffset;

    graph.legend.append('rect')
        .attr('x', graph.legendConfig.xOffset)
        .attr('y', function(d, i) {
            return graph.legendConfig.yOffset + i * graph.legendConfig.lineHeight;
        })
        .attr('height', graph.legendConfig.rectHeight)
        .attr('width' , graph.legendConfig.rectWidth)
        .attr('fill'  , function(d) {
            return graph.fillColor(d.key);
        })
        .attr('stroke', function(d) {
            return graph.strokeColor(d.key);
        });

    graph.legend.append('text')
        .attr('x', graph.legendConfig.xOffsetText)
        .attr('y', function(d, i) {
            return graph.legendConfig.yOffsetText + i * graph.legendConfig.lineHeight;
        })
        .text(function(d) {
            return d.typeName + (d.group ? ': ' + d.group : '');
        });



    $('#graph-container').on('scroll', function() {
        graph.legend.attr('transform', 'translate(0,' + $(this).scrollTop() + ')');
    });
    */
    graph.line = graph.svg.append('g').selectAll('.link')
        .data(graph.force.links())
      .enter().append('line')
        .attr('class', 'link');

    graph.draggedThreshold = d3.scale.linear()
        .domain([0, 0.1])
        .range([5, 20])
        .clamp(true);

    function dragged(d) {
        var threshold = graph.draggedThreshold(graph.force.alpha()),
            dx        = d.oldX - d.px,
            dy        = d.oldY - d.py;
        if (Math.abs(dx) >= threshold || Math.abs(dy) >= threshold) {
            d.dragged = true;
        }
        return d.dragged;
    }

    graph.drag = d3.behavior.drag()
        .origin(function(d) { return d; })
        .on('dragstart', function(d) {
            d.oldX    = d.x;
            d.oldY    = d.y;
            d.dragged = false;
            d.fixed |= 2;
        })
        .on('drag', function(d) {
            d.px = d3.event.x;
            d.py = d3.event.y;
            if (dragged(d)) {
                if (!graph.force.alpha()) {
                    graph.force.alpha(.025);
                }
            }
        })
        .on('dragend', function(d) {
            if (!dragged(d)) {
                that.selectObject(d, this);
            }
            d.fixed &= ~6;
        });

    $('#graph-container').off('click').on('click', function(e) {
        if (!$(e.target).closest('.node').length) {
            that.deselectObject();
        }
    });

    graph.node = graph.svg.selectAll('.node')
        .data(graph.force.nodes())
      .enter().append('g')
        .attr('class', 'node')
        .call(graph.drag)
        .on('mouseover', function(d) {
            that.showTooltip(d);
            if (!that.selected.obj) {
                if (graph.mouseoutTimeout) {
                    clearTimeout(graph.mouseoutTimeout);
                    graph.mouseoutTimeout = null;
                }
                that.highlightObject(d);
            }
        })
        .on('mouseout', function() {
            that.hideTooltip();
            if (!that.selected.obj) {
                if (graph.mouseoutTimeout) {
                    clearTimeout(graph.mouseoutTimeout);
                    graph.mouseoutTimeout = null;
                }
                graph.mouseoutTimeout = setTimeout(function() {
                    that.highlightObject(null);
                }, 300);
            }
        })
        .on('click', function(d) {
            store.dispatch(selectP(d.IP));
        })
        .on('dblclick', function(d) {
            that.highlightObject2(d);
        })

    graph.nodeRect = graph.node.append('rect')
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('stroke', function(d) {
            return that.colorForDarker(d);
        })
        .attr('fill', function(d) {
            return that.colorFor(d);
        })
        .attr('width' , 200)
        .attr('height', 30);

    graph.nodeRect.each(function(d) {
        if (that.state.hiddenNodes.includes(d.IP))
          d3.select(this).attr('display', 'none')

    });

    graph.line.each(function(d) {
        if (that.state.hiddenNodes.includes(d.target.IP))
          d3.select(this).attr('display', 'none')

    });

    graph.node.each(function(d) {
        if (that.state.hiddenNodes.includes(d.IP))
          return;

        if (d.IP == that.props.selectedPeerIP)
            that.selectObject(d)

        var node  = d3.select(this),
            rect  = node.select('rect'),
            lines = [d.name],
            ddy   = 1.1,
            dy    = -ddy * lines.length / 2 + .5;

        lines.forEach(function(line) {
            var text = node.append('text')
                .text(function(d) {
                   return that.state.collapsedNodes.indexOf(d.IP) == -1 ? d.IP : `${d.IP}...`;
                })
                .attr('dy', dy + 'em');
            dy += ddy;
        });
      });

    setTimeout(function(){
        graph.node.each(function(d) {
            var node   = d3.select(this),
                rect  = node.select('rect'),
                text   = node.selectAll('text'),
                bounds = {}

            if (!text[0].length) return;

            text.each(function() {
                var box = this.getBBox();

                    bounds.x1 = box.x;

                    bounds.y1 = box.y;

                    bounds.x2 = box.x + box.width;

                    bounds.y2 = box.y + box.height;
            }).attr('text-anchor', 'middle');

            text.classed('inactive', d.node_state !== 'active');

            rect.classed('filtered', function(d){

              const { selectedFilters, filters } = that.props;

              if (undefined === selectedFilters || Object.keys(selectedFilters).length == 0 )
                  return false;

              const key = Object.keys(selectedFilters)[0]

              return d[key] != selectedFilters[key];
            });


            var padding  = config.graph.labelPadding,
                margin   = config.graph.labelMargin,
                oldWidth = bounds.x2 - bounds.x1;

             bounds.x1 -= oldWidth/2;
             bounds.x2 -= oldWidth/2;

            bounds.x1 -= padding.left;
             bounds.y1 -= padding.top;
            bounds.x2 += padding.left + padding.right;
             bounds.y2 += padding.top  + padding.bottom;

            node.select('rect')
                .attr('x', -40)
                .attr('y', -12)
                .attr('width' , 80)
                .attr('height', 20);

            d.extent = {
                left   : bounds.x1 - margin.left,
                right  : bounds.x2 + margin.left + margin.right,
                top    : bounds.y1 - margin.top,
                bottom : bounds.y2 + margin.top  + margin.bottom
            };

            d.edge = {
                left   : new LineSegment(bounds.x1, bounds.y1, bounds.x1, bounds.y2),
                right  : new LineSegment(bounds.x2, bounds.y1, bounds.x2, bounds.y2),
                top    : new LineSegment(bounds.x1, bounds.y1, bounds.x2, bounds.y1),
                bottom : new LineSegment(bounds.x1, bounds.y2, bounds.x2, bounds.y2)
            };
        });

        graph.numTicks = 0;
        graph.preventCollisions = false;
        graph.force.start();

        for (var i = 0; i < config.graph.ticksWithoutCollisions; i++) {
            graph.force.tick();
        }
        graph.preventCollisions = true;

        $('#graph-container').css('visibility', 'visible');
    });
    }

    wrap(text) {
      let maxLineChars = 10;
      let wrapChars = ' /_-.'.split('');
    if (text.length <= maxLineChars) {
        return [text];
    } else {
        for (var k = 0; k < wrapChars.length; k++) {
            var c = wrapChars[k];
            for (var i = maxLineChars; i >= 0; i--) {
                if (text.charAt(i) === c) {
                    var line = text.substring(0, i + 1);
                    return [line].concat(this.wrap(text.substring(i + 1)));
                }
            }
        }
        return [text.substring(0, maxLineChars)]
            .concat(this.wrap(text.substring(maxLineChars)));
    }
}

preventCollisions() {
    var quadtree = d3.geom.quadtree(graph.nodeValues);

    for (var name in graph.data) {
        var obj = graph.data[name],
            ox1 = obj.x + obj.extent.left,
            ox2 = obj.x + obj.extent.right,
            oy1 = obj.y + obj.extent.top,
            oy2 = obj.y + obj.extent.bottom;

        quadtree.visit(function(quad, x1, y1, x2, y2) {
            if (quad.point && quad.point !== obj) {
                // Check if the rectangles intersect
                var p   = quad.point,
                    px1 = p.x + p.extent.left,
                    px2 = p.x + p.extent.right,
                    py1 = p.y + p.extent.top,
                    py2 = p.y + p.extent.bottom,
                    ix  = (px1 <= ox2 && ox1 <= px2 && py1 <= oy2 && oy1 <= py2);
                if (ix) {
                    var xa1 = ox2 - px1, // shift obj left , p right
                        xa2 = px2 - ox1, // shift obj right, p left
                        ya1 = oy2 - py1, // shift obj up   , p down
                        ya2 = py2 - oy1, // shift obj down , p up
                        adj = Math.min(xa1, xa2, ya1, ya2);

                    if (adj == xa1) {
                        obj.x -= adj / 2;
                        p.x   += adj / 2;
                    } else if (adj == xa2) {
                        obj.x += adj / 2;
                        p.x   -= adj / 2;
                    } else if (adj == ya1) {
                        obj.y -= adj / 2;
                        p.y   += adj / 2;
                    } else if (adj == ya2) {
                        obj.y += adj / 2;
                        p.y   -= adj / 2;
                    }
                }
                return ix;
            }
        });
    }
}

colorFor(d){
  const { selectedFilters, filters } = this.props;

  if (undefined === selectedFilters || Object.keys(selectedFilters).length == 0 )
    return '#007bff';

  const key = Object.keys(selectedFilters)[0]

  const list = filters.filter((f) => {return f.field == key })[0].list

  return list[d[key]];
}

colorForDarker(d){
    this.colorFor(d)
}

hideChildren(array, IP){
    let graph = this.graphh;
    let el = graph.data.find((g) => {return g.IP == IP})
    el.dependedOnBy.forEach((ip) => {
        this.hideChildren(array,ip)
    })
    array.push(IP)
}


highlightObject2(obj) {
  let graph = this.graphh;

  if (this.state.collapsedNodes.indexOf(obj.IP) === -1 ){
    this.setState({collapsedNodes: this.state.collapsedNodes.concat([obj.IP]) })
  }
  else {
    this.setState({collapsedNodes: this.state.collapsedNodes.filter((ip) => {return ip != obj.IP})})
  }

  let forHide  = [];

  this.state.collapsedNodes.forEach((ip) => {
      this.hideChildren(forHide,ip)
      forHide.pop();
    });

    this.setState({hiddenNodes: forHide})
}


highlightObject(obj) {
  let graph = this.graphh;
    if (obj) {
        if (obj !== this.highlighted) {
            graph.node.classed('inactive', function(d) {
                return (obj !== d
                     && d.depends.indexOf(obj.name) == -1
                     && d.dependedOnBy.indexOf(obj.name) == -1);
            });
            graph.line.classed('inactive', function(d) {
                return (obj !== d.source && obj !== d.target);
            });
        }
        this.highlighted = obj;
    } else {
        if (this.highlighted) {
            graph.node.classed('inactive', false);
            graph.line.classed('inactive', false);
        }
        this.highlighted = null;
    }
}

hideTooltip(){
    var div = d3.select(".tooltip")
    div.style("opacity", 0)
        .style("left", "-100px")
        .style("top", "-100px");
  }

showTooltip(d){
  var div = d3.select(".tooltip")
  div.style("opacity", .9)
    .html("IP: "+d.IP + "<br/>"+
            humanize(d.node_state) +"<br/>"+
            humanize(d.node_type))
   .style("left", (d.x + 30) + "px")
   .style("top", (d.y - 75) + "px")
}

selectObject(obj, el) {
  let graph = this.graphh;
    var node;
    if (el) {
        node = d3.select(el);
    } else {
        graph.node.each(function(d) {
            if (d === obj) {
                node = d3.select(el = this);
            }
        });
    }
    if (!node) return;

    if (node.classed('selected')) {
        this.deselectObject();
        return;
    }

    this.selected = {
        obj : obj,
        el  : el
    };

    this.highlightObject(obj);

    node.classed('selected', true);
    $('#docs').html(obj.docs);
    $('#docs-container').scrollTop(0);

    var $graph   = $('#graph-container'),
        nodeRect = {
            left   : obj.x + obj.extent.left + graph.margin.left,
            top    : obj.y + obj.extent.top  + graph.margin.top,
            width  : obj.extent.right  - obj.extent.left,
            height : obj.extent.bottom - obj.extent.top
        },
        graphRect = {
            left   : $graph.scrollLeft(),
            top    : $graph.scrollTop(),
            width  : $graph.width(),
            height : $graph.height()
        };

    const offset = 20;

    if (nodeRect.left + nodeRect.width/2 < graphRect.left + graphRect.width/2 - offset ||
        nodeRect.left + nodeRect.width/2 > graphRect.left + graphRect.width/2 + offset ||
        nodeRect.top + nodeRect.height/2 < graphRect.top + graphRect.height/2 - offset ||
        nodeRect.top + nodeRect.height/2 > graphRect.top + graphRect.height/2 + offset) {


        $graph.animate({
            scrollLeft : nodeRect.left + nodeRect.width  / 2 - graphRect.width  / 2,
            scrollTop  : nodeRect.top  + nodeRect.height / 2 - graphRect.height / 2
        }, 500);
    }
}

deselectObject(doResize) {
  let graph = this.graphh;
    graph.node.classed('selected', false);
    this.selected = {};
    this.highlightObject(null);
   //store.dispatch(selectP(null))
   //store.dispatch(filterPeers({}))
}

    drawGraph2() {
const data = Object.assign({}, this.props.data);




var width = +d3.select('.chart').style('width').slice(0, -2),
    height = 300,
    root;


    var force = d3.layout.force()
    .linkDistance(60)
    .charge(-120)
    .gravity(.05)
    .size([width, height])
    .on("tick", tick);

var svg = d3.select(".chart")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");

// d3.json("graph.json", function(error, json) {
//   if (error) throw error;

  root = data;
  update();
// });

function update() {
  var nodes = flatten(root),
      links = d3.layout.tree().links(nodes);

  // Restart the force layout.
  force
      .nodes(nodes)
      .links(links)
      .start();

  // Update links.
  link = link.data(links, function(d) { return d.target.id; });

  link.exit().remove();

  link.enter().insert("line", ".node")
      .attr("class", "link");

  // Update nodes.
  node = node.data(nodes, function(d) { return d.id; });

  node.exit().remove();

  // var div = d3.select(".chartContainer").append("div")
  //   .attr("class", "tooltip")
  //   .style("opacity", 0)
  //   .style("position", "absolute");

  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .on("click", click)
      .on("dblclick", dblClick)
      .on("mouseover", mouseOver)
      .on("mouseout", mouseLeave)
      .call(force.drag);

  nodeEnter.append("circle")
      .attr("r", function(d) { return 5 });

  nodeEnter.append("text")
      .attr("dy", "-1em")
      .text(function(d) {
        console.log('112113', this.state.collapsedNodes)
        return this.state.collapsedNodes.indexOf(d.IP) == -1 ? d.IP : `${d.IP}...` })
      .style("opacity",  function(d) { return d.node_state == 'active' ? 1 : 0.3; })
      .style("font-weight",  function(d) { return d.node_state == 'active' ? 'bold' : 'normal'; })
  node.select("circle")
   .attr("r", function(d) {
        return (d.ssselect === undefined || !d.ssselect ? 5 : 10) });

  node.select("circle")
      .style("fill", color)
      .style("opacity",  function(d) { return d.node_state == 'active' ? 1 : 0.3; })
}

// function tick() {
//   link.attr("x1", function(d) { return d.source.x; })
//       .attr("y1", function(d) { return d.source.y; })
//       .attr("x2", function(d) { return d.target.x; })
//       .attr("y2", function(d) { return d.target.y; });

//   node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
// }

function color(d) {
  return d.ssselect ? "#00FF00"
      : d._children ? "#3182bd" // collapsed package
      : "#c6dbef" // expanded package
}

function mouseLeave(d){
  var div = d3.select(".tooltip")
    div
    .style("opacity", 0)
    .style("left", "-100px")
   .style("top", "-100px");
  }

function mouseOver(d){
  var div = d3.select(".tooltip")
  div
    .style("opacity", .9);
  div.html("IP: "+d.IP + "<br/>"+
            d.node_state +"<br/>"+
            d.node_type)
   .style("left", (d.x) + "px")
   .style("top", (d.y + 12) + "px")

}

// Toggle children on click.
function dblClick(d) {
  if (d3.event.defaultPrevented) return; // ignore drag
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update();
}

// function click(d) {
//   if (d3.event.defaultPrevented) return; // ignore drag
//     unselect(root)
//   d.ssselect = true;
//   store.dispatch(selectP(d))
//   update();
// }
function unselect(root) {

  root.ssselect = false
    if (root.children === undefined || root.children == null)
    return;
  root.children.map((c) => {unselect(c)});
  }

// Returns a list of all nodes under the root.
function flatten(root) {
  var nodes = [], i = 0;

  function recurse(node) {
    if (node.children) node.children.forEach(recurse);
    if (!node.id) node.id = ++i;
    nodes.push(node);
  }

  recurse(root);
  return nodes;
}
    }

  componentDidUpdate() {
        this.drawGraph();

}

  render() {
    return(
        <div className='col-12'>
            <div className='graphLayer'>
                <div  id='graph-container'>
                    <div  id='graph'>
                    <div className='tooltip'/>
                    </div>
                </div>
                <Legend/>
                <Filters/>
            </div>
        </div>);
  }
}

function mapStateToProps(store) {
  return {
    data: store.peersReducer.data.data,
    filters:  store.peersReducer.data.length == 0 ?
      [] : store.peersReducer.data.filters.filters,
    selectedPeerIP:store.peersReducer.selectedPeerIP,
    selectedFilters: store.peersReducer.selected,
  };
}

export default connect (mapStateToProps, null)(Graph);
