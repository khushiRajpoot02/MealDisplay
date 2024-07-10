import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DynamicUI = ({ data }) => {
  const renderQuickLinks = (quickLinks) => {
    return quickLinks.list.map((link, index) => (
      <TouchableOpacity key={index} style={styles.linkButton}>
        <Text>{link.label}</Text>
      </TouchableOpacity>
    ));
  };

  const renderSidebarItems = (items) => {
    return items.map((item, index) => (
      <View key={index} style={styles.sidebarItem}>
        <Text>{item.label}</Text>
        {item.items && renderSidebarItems(item.items)}
      </View>
    ));
  };

  const renderReportFilters = (filters) => {
    return filters.map((filter, index) => (
      <View key={index} style={styles.filterItem}>
        <Text>{filter.label}</Text>
      </View>
    ));
  };

  const renderColumns = (columns) => {
    return columns.map((column, index) => (
      <View key={index} style={styles.columnItem}>
        <Text>{column.label}</Text>
      </View>
    ));
  };

  const renderFormFields = (fields) => {
    return fields.map((field, index) => (
      <View key={index} style={styles.formField}>
        <Text>{field.label}</Text>
        {field.children && renderFormFields(field.children)}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      {data.quick_links && renderQuickLinks(data.quick_links)}
      {data.sidebar && renderSidebarItems(data.sidebar)}
      {data.report_view && renderReportFilters(data.report_view.filters)}
      {data.list_view && renderColumns(data.list_view.columns)}
      {data.form_view && renderFormFields(data.form_view.fields)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  linkButton: {
    padding: 10,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
  sidebarItem: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  filterItem: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginVertical: 5,
  },
  columnItem: {
    padding: 10,
    backgroundColor: '#fafafa',
    marginVertical: 5,
  },
  formField: {
    padding: 10,
    backgroundColor: '#ffffff',
    marginVertical: 5,
  },
});

export default DynamicUI;
