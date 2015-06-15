var imageList = new Array();

imageList[0] = new Image();
imageList[0].src = "Slide-image/201409--_MarbleMachines_MS_People-Artifact.JPG";
imageList[1] = new Image();
imageList[1].src = "Slide-image/201409--_MarbleMachines_People-Artifact(2).JPG";
imageList[2] = new Image();
imageList[2].src = "Slide-image/201409--_ScribblingMachines_Artifact.JPG";
imageList[3] = new Image();
imageList[3].src = "Slide-image/20141006_MusicalInstruments_MS_Artifact-People.JPG";
imageList[4] = new Image();
imageList[4].src = "Slide-image/20141013_Origami_MS_Artifact.JPG";
imageList[5] = new Image();
imageList[5].src = "Slide-image/20141013_Origami_MS_People-Artifact.JPG";
imageList[6] = new Image();
imageList[6].src = "Slide-image/20141021_ScribblingMachines_MS_People-Artifact(2).JPG";
imageList[7] = new Image();
imageList[7].src = "Slide-image/20141021_ScribblingMachines_MS_People-Artifact.JPG";
imageList[8] = new Image();
imageList[8].src = "Slide-image/20141103_TallStructures_MS_People.JPG";
imageList[9] = new Image();
imageList[9].src = "Slide-image/20141103_TallStructures_MS_People.JPG";
imageList[10] = new Image();
imageList[10].src = "Slide-image/20141103_TallStructures_MS_People-Artifact (1).JPG";
imageList[11] = new Image();
imageList[11].src = "Slide-image/20141103_TallStructures_MS_People-Artifact (2).JPG";
imageList[12] = new Image();
imageList[12].src = "Slide-image/20141103_TallStructures_MS_People-Artifact(2).JPG";
imageList[13] = new Image();
imageList[13].src = "Slide-image/20141103_TallStructures_MS_People-Artifact.JPG";
imageList[14] = new Image();
imageList[14].src = "Slide-image/20141209_Showcase_Artifact (1).JPG";
imageList[15] = new Image();
imageList[15].src = 'Slide-image/20141209_Showcase_Artifact (2).JPG';
imageList[16] = new Image();
imageList[16].src = 'Slide-image/20150105_LightPainting_MS_Artificact(2).JPG';
imageList[17] = new Image();
imageList[17].src = 'Slide-image/20150105_LightPainting_MS_Artificact.JPG';
imageList[18] = new Image();
imageList[18].src = 'Slide-image/Copy of 20141104_Circuits_MS_Artifact.JPG';

setInterval(update, 10000);

function update(){
	var ran1 = Math.floor(Math.random() * 18);
	var ran2 = Math.floor(Math.random() * 18);
	var ran3 = Math.floor(Math.random() * 18);
	var ran4 = Math.floor(Math.random() * 18);

	document.getElementById("firstImage").src = imageList[ran1].src;
	document.getElementById("secondImage").src = imageList[ran2].src;
	document.getElementById("thirdImage").src = imageList[ran3].src;
	document.getElementById("fouthImage").src = imageList[ran4].src;
}