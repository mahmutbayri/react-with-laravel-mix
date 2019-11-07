# Filter Sort Table Ajax Data Example

In this example, i want to show how to sort and filter ajax data.

First, an ajax data is loaded from an url and renders table with it. Clicking column name, you can sort the loaded table data. If you want to filter the data you can enter word in to the field below the related column name.

In the construct method of `PostList` component all state filed are initialized and also some handlers bind.

In the `componentDidMount lifecycle method, ajax request is started. During this time, a loading messages is shown then the request is finished the data is filled to the table.

`handleFilter` method is used to filter the data. it gives two arguments filed and value. The data is loaded at the beginning keeps in `allItems` property of the state object. It is not filtered or sorted, only data is stored in `items` property is sorted and filtered.

`handleSortBy` mehod is used to sort the table. It gives only one argument which name will be sorted.

