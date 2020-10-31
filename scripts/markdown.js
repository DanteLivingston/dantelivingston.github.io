const { getFilesFolders } = require('./utility');
const path = require('path');
const dir = path.join(__dirname, '../src/config');
const markdown = require('markdown').markdown;
const fs = require('fs');

const mdFiles = getFilesFolders(dir).filter((file) => file.includes('.md'));

mdFiles.forEach((mdFile) => {
  const file = fs.readFileSync(mdFile).toString();
  const html = markdown.toHTML(file);
  console.log(html);
  const description =
    '`' + html.replace(/href/g, "rel='noopener noreferrer' target='_blank' href") + '`';
  fs.writeFileSync(
    mdFile.replace('.md', '.js'),
    `const description = ${description}
export default description
`
  );
});
