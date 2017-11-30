Blockly.Blocks['design_provocation_if'] = {
  init: function() {
    this.appendValueInput("dp_if")
        .setCheck(null)
        .appendField("if block is color");
    this.appendStatementInput("dp_play")
        .setCheck(null)
        .appendField("play");
    this.appendStatementInput("dp_else_play")
        .setCheck(null)
        .appendField("else play");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['red_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RED");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['twinkle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("twinkle");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['itsy_bitsy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("the itsy bitsy spider");
      this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['jelly'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jelly");
    this.setOutput(true, null);
    this.setColour(125);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['peanut_butter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Peanut Butter");
    this.setOutput(true, null);
    this.setColour(125);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pjb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("P B J");
    this.setOutput(true, null);
    this.setColour(125);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['make_jelly'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("make jelly");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['make_peanut_butter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("make peanut butter");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['make_pjb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("make PBJ");
    this.setOutput(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['if_sam_ruth'] = {
  init: function() {
    this.appendValueInput("sam_ruth")
        .setCheck(null)
        .appendField("if");
    this.appendValueInput("make")
        .setCheck(null)
        .appendField("make");        
    this.appendValueInput("or_make")
        .setCheck(null)
        .appendField("else make");        
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['sam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sam is coming");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ruth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ruth is coming");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.Blocks['sam_likes_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sam likes");
    this.appendValueInput("food_x")
        .setCheck("")
        .appendField("");
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
   }
};

 Blockly.Blocks['ruth_likes_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ruth likes");
    this.appendValueInput("food_x")
        .setCheck("")
        .appendField("");
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
   }
};
