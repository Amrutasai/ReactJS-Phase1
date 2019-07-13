<img src='https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png'/>
<caption>           Web-Rendering Block Diagram</caption>

Rendering refers to the display of the requestion contents on the browser screen.<br>This is done using Rendering engines. The rendering engines request content information from the network it is connected to. The request is answered by providing HTML and CSS to the engine. The first step is to **parse** the HTML&CSS files separately to create DOM(Document Object Model) trees. The trees obtained are combined to form **Render Tree**. This render tree has the html segments along with their css styling in one node.Then these nodes are rearranged to be in the exact order of display on final webpage. The tree is traversed and displayed to give the final output. 

__BLOCKS__
<li>HTML PARSER</li>
The parcer's role is to convert the document into a structure the code can use. The output of this block is usually a Parse tree or a syntax tree. These use predifined algorithms for this purpose.
<li>CSS PARSER</li>
Similar to HTML parcer ,its role is to convert the CSS style document to a tree structure of Style Rules that have the same layout as that of the DOM tree. This tree has the style applied to each element of the webpage in order of execution.
<li>Attachment</li>
This module combines the DOM Tree and the Style Rules structure to give a Render Tree. This Render tree has nodes which describe both the HTML and the CSS styling of the element on the webpage. 
<li>Layout</li>
Layout module re-arranges the nodes to be in exact order of final display on the webpage rather than the order they were defined in. This generated a Render Tree.
<li>Painting</li>
This module takes every single node in the Render Tree and involkes the 'paint()' method which processes the HTML and styling of the node/element to display constent on the screen.<br>
Hence the HTML and Style Sheets get converted to Display by the Rendering engines of the browsers<br>
Rendering Engines:
<li>Internet Explorer - Trident
<li>Firefox - Gecko
<li>Safari - WebKit 
<li>Chrome and Opera - Blink
