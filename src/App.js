function FilterableProductTable({ products }) {
  return (
    <p>
      <SearchBar />
      <ProductTable />
    </p>
  );
}
function SearchBar() {
  return (
    <p>
      <form>
        <label> input</label>
      </form>
    </p>
  );
}
function ProductTable() {
  return (
    <p>
      <ProductCategoryRow />
      <ProductRow />
    </p>
  );
}
function ProductCategoryRow() {}
function ProductRow() {}
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
