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
