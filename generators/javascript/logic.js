/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.JavaScript.logic');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.JavaScript.valueToCode(block, 'IF' + n,
      Blockly.JavaScript.ORDER_NONE) || 'false';
    branchCode = Blockly.JavaScript.statementToCode(block, 'DO' + n);
    code += (n > 0 ? ' else ' : '') +
        'if (' + conditionCode + ') {\n' + branchCode + '}';

    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.JavaScript.statementToCode(block, 'ELSE');
    code += ' else {\n' + branchCode + '}';
  }
  return code + '\n';
};

Blockly.JavaScript['controls_ifelse'] = Blockly.JavaScript['controls_if'];

Blockly.JavaScript['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.JavaScript.ORDER_EQUALITY : Blockly.JavaScript.ORDER_RELATIONAL;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.JavaScript['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.JavaScript.ORDER_LOGICAL_AND :
      Blockly.JavaScript.ORDER_LOGICAL_OR;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order);
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.JavaScript['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.JavaScript.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'BOOL', order) ||
      'true';
  var code = '!' + argument0;
  return [code, order];
};

Blockly.JavaScript['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['logic_null'] = function(block) {
  // Null data type.
  return ['null', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.JavaScript.valueToCode(block, 'IF',
      Blockly.JavaScript.ORDER_CONDITIONAL) || 'false';
  var value_then = Blockly.JavaScript.valueToCode(block, 'THEN',
      Blockly.JavaScript.ORDER_CONDITIONAL) || 'null';
  var value_else = Blockly.JavaScript.valueToCode(block, 'ELSE',
      Blockly.JavaScript.ORDER_CONDITIONAL) || 'null';
  var code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.JavaScript.ORDER_CONDITIONAL];
};

Blockly.JavaScript['jelly'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\"" + "jelly" + "\"";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['peanut_butter'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\"" + "peanut butter" + "\"";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pjb'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\"" + "PBJ" + "\"";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['make_jelly'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\"" + "jelly" + "\"";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['make_peanut_butter'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\"" + "peanut butter" + "\"";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['make_pjb'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\"" + "PBJ" + "\"";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sam'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "'SAM'"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ruth'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "'RUTH'"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sam_or_ruth'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['if_sam_ruth'] = function(block) {
  var value_sam_ruth = Blockly.JavaScript.valueToCode(block, 'sam_ruth', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_make = Blockly.JavaScript.statementToCode(block, 'make');
  var statements_or_make = Blockly.JavaScript.statementToCode(block, 'or_make');
  // TODO: Assemble JavaScript into code variable.
  var code = "if (" + value_sam_ruth + "){ \n " + 
              statements_make + '\n } \n' +
              'else{ ' + statements_or_make +' \n }';
  return code;
};


Blockly.JavaScript['sam_likes_y'] = function(block) {
  var value_food_x = Blockly.JavaScript.valueToCode(block, 'food_x', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['ruth_likes_y'] = function(block) {
  var value_food_x = Blockly.JavaScript.valueToCode(block, 'food_x', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5ds72z
Blockly.JavaScript['design_provocation_if'] = function(block) {
  var value_dp_if = Blockly.JavaScript.valueToCode(block, 'dp_if', Blockly.JavaScript.ORDER_ATOMIC) || "'BLUE'";
  var statements_dp_play = Blockly.JavaScript.statementToCode(block, 'dp_play');
  var statements_dp_else_play = Blockly.JavaScript.statementToCode(block, 'dp_else_play');
  // TODO: Assemble JavaScript into code variable.
  var code = "if (" + value_dp_if + "== 'RED'){ \n " + 
              statements_dp_play + '\n } \n' +
              'else{ ' + statements_dp_else_play +' \n }';
  return code;
};


//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#znc3at
//Condition red_block
Blockly.JavaScript['red_block'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "'RED'"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#zecabc
//play twinkle twinkle little star
Blockly.JavaScript['twinkle'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "audio = new Audio('audio/TwinkleTwinkleLittleStar.mp3'); audio.play();";
  return code;
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nc5hsi
//play the itsy bitsy spider

Blockly.JavaScript['itsy_bitsy'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "var audio = new Audio('audio/ItsyBitsySpider.mp3'); audio.play();";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
