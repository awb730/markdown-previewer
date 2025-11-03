import React from 'react';
import './App.css'
import { marked } from 'marked';

class MarkPreviewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: `# Welcome to My Markdown Previewer!
      
  ## Here is something you can do
  ### Lets Create a Grocery List
  
  These are some popular [grocery stores](https://www.globaldata.com/companies/top-companies-by-sector/retail-wholesale/global-food--grocery-retailers-by-sales/).
  
  Here is where I am going shopping: \`console.log("Walmart")\`
  Now lets make a shopping list. 
  
  \`\`\`
  function makeList(list) {
    console.log(list);
  }
  \`\`\`
  
  > Here is my grocery list:

  - Chicken
  - Rice
  - Milk
  
  **This is the grocery store aisle.**
  
  ![Walmart](https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5256x3942+0+0/resize/1100/quality/50/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F72%2Fa2%2Ff38f61084615b22753610cf023ee%2Fimg-2072-edit.jpg)
  `
    };
    this.changeInput = this.changeInput.bind(this);
  }
 
  changeInput(event) {
    this.setState({
      input: event.target.value
    });
  }
  
  render() {
    return(
      <div className="container">
        <textarea id="editor" value={this.state.input} onChange={this.changeInput}>
        </textarea>
        <div 
          id="preview" 
          dangerouslySetInnerHTML={{
              __html: marked.parse(this.state.input, { breaks: true })
            }}>
        </div>
      </div>
    )
  }
}

export default MarkPreviewer;
