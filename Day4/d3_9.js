// ## 🔥 **Advanced Bonus Questions**

// ### **11. Computed Property Names**

// 👉 Create an object where the key comes from a variable:


const prop = "score";
const age="number"
const player = { name: "krisn", [prop]: 95 ,[age]:22}
console.log(player.score)
console.log(player.number)