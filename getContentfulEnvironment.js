const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-ezBk1BrDnlx0XG8jqffjmq0Sc8EY0JrfVJSgjf08xDI',
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID || '7n7vfqlomamo')
    .then(space => space.getEnvironment('master'))
}