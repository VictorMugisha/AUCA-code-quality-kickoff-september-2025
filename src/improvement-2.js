/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2
// export default function processItems(items) {
//   const processedItems = [];
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if (item.type === "Food") {
//       processedItems.push(item);
//     }
//   }
//   return processedItems;
// }

// export default function getFoodObjects(objects) {
//   const foods = []
//   for (const object of objects) {
//     if (object.type === "Food") foods.push(object)
//   }

//   return foods
// }

export default function typeValue(items){
  const processedItems = [];
  for(const item of items){
    if(item.type === "Food") processedItems.push(item);
  }
  return processedItems
}
