loadAPI(1);

host.defineController("Arturia", "KeyStep Pro", "1.0", "6bb3fe45-1d23-4ee0-be84-82f375b2f29f");
host.defineMidiPorts(1, 0);
host.addDeviceNameBasedDiscoveryPair(["KeyStep Pro"], []);

function init() {
	noteInput = host.getMidiInPort(0).createNoteInput("All Tracks", "??????");
  noteInput.setShouldConsumeEvents(false);
  for (var t=0; t<4; t++) {
  	trackNoteInput = host.getMidiInPort(0).createNoteInput("Track " + (t+1), "?" + t + "????");
  	trackNoteInput.setShouldConsumeEvents(false);
  }
	noteInput10 = host.getMidiInPort(0).createNoteInput("Drums", "?9????");
	noteInput10.setShouldConsumeEvents(false);

  userControls = host.createUserControlsSection(5);

  for(var p=0; p<5; p++) {
     userControls.getControl(p).setLabel("Knob " + (p + 1));
  }

  println("Arturia KeyStep Pro initialized!");
}

function exit() {
  println("Arturia KeyStep Pro exited!");
}

