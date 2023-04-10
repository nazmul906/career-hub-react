import { getShoppingCart } from "../utilities/localStore";
const AppliedJobloader = async () => {
  console.log("local");
  //   const loadedProducts = await fetch("products.json");
  //   const products = await loadedProducts.json();
  const loadAppliedJOb = await fetch("featureData.json");
  const appliedJob = await loadAppliedJOb.json();
  console.log("apply", appliedJob);
  const local = getShoppingCart();
  //    const match = appliedJob.find((item)=>item.id==)
};

export default AppliedJobloader;
