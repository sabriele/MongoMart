// LAB 1
db.item.aggregate([
	{ $group: { _id: "$category", num: { $sum: 1 } } },
	{ $sort: { _id: 1 } },
	{ $project: { _id: 1, num: 1 } }
]);

db.item.aggregate([{ $sort: { category: 1, title: 1 } }, { $skip: 2 }, { $limit: 5 }]);

/*Gives different results: */
db.item.aggregate([{ $sort: { category: 1, title: 1 } }, { $skip: 2 }, { $limit: 5 }]);
db.item.aggregate([{ $sort: { category: 1, title: 1 } }, { $limit: 5 }, { $skip: 2 }]);


// LAB 2
db.item.aggregate([
	{ $match: { $or: [{ title: { $regex: /leaf/i } }, { slogan: { $regex: /leaf/i } }, { description: { $regex: /leaf/i } }] } },
	{ $sort: { _id: 1 } }
]);

db.item.createIndex({
	title: "text",
	slogan: "text",
	description: "text"
});
