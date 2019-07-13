<img src='https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png'/>
<caption>           Web-Rendering Block Diagram</caption>

Rendering refers to the display of the requestion contents on the browser screen.<br>This is done using Rendering engines. The rendering engines request content information from the network it is connected to. The request is answered by providing HTML and CSS to the engine. The first step is to **parse** the HTML&CSS files separately to create DOM(Document Object Model) trees. The trees obtained are combined to form **Render Tree**. This render tree has the html segments along with their css styling in one node.Then these nodes are rearranged to be in the exact order of display on final webpage. The tree is traversed and displayed to give the final output. 

__BLOCKS__
<li>HTML PARSER</li><br>
<p></p>
