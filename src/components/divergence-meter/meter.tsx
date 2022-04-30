// Packages
import React from 'react';

// Local Imports
import ConvertSVG from '../general/ConvertSVG';
//import Text from '../general/Text';
import { METER_CSS } from './config';

export interface IMeterParameters {
  numbers: string[];
  pieceImages: Record<string, string>;
}

//function divergence()
//{
//	//2010/7/28 12:00:00 UTC+9; Start of Steins Gate
//	var start=1280286000;
//	//2038/1/19 3:14:07 UTC; End of Unix Time
//	var end=2147483647;
//	var t=new Date().getTime();
//	t/=1000;
//	var sg=(t-start)/(end-start)*1.048596+(Math.sin(t/99999)+Math.cos(t/65535))/42;
//	return sg.toFixed(6);
//}
//	var nix=new Array();
//	for (var i=0;i<10;i++)
//		nix[i]=chrome.extension.getURL("static/nix"+i+".jpg");
//	nid=chrome.extension.getURL("static/nixd.jpg");
//	var sg=divergence();
//	document.getElementById("result").innerHTML="<img src="+nix[parseInt(sg.charAt(0))]+"><img src="+nid+">";
//	for (var i=2;i<8;i++)
//	{
//		var pic="<img src="+nix[parseInt(sg.charAt(i))]+">";
//		document.getElementById("result").innerHTML+=pic;
//	}
//});

//const t = new Date().getTime();

export const MeterBoard: React.FC<IMeterParameters> = ({
  numbers,
  pieceImages,
 }: IMeterParameters) => {
  return (
    <ConvertSVG
      width="800"
      height="200">
      <div id="meter">
        {numbers.map((nValue) => (
          <img src={ pieceImages[`${ nValue === '.' ? 'd' : nValue }`] }></img>
        ))}
      </div>

      <style>
        { METER_CSS }
      </style>
    </ConvertSVG>
  );
};
