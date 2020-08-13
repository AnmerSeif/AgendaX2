const CategoriesControl = createClass({
    handleChange: function(e) {
      const separator = this.props.field.get('separator', ', ')
      this.props.onChange(e.target.value.split(separator).map((e) => e.trim()));
    },
  
    render: function() {
      const separator = this.props.field.get('separator', ', ');
      var value = this.props.value;
      return h('div', {
      }, h('h1', {value: 'hei'}))
    },
  });
  
  const CategoriesPreview = createClass({
    render: function() {
      return h('ul', {},
        this.props.value.map(function(val, index) {
          return h('li', {key: index}, val);
        })
      );
    }
  });
  
  const schema = {
    properties: {
      separator: { type: 'string' },
    },
  }

  CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema);