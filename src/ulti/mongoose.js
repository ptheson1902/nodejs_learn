module.exports = {
    multipleMongooserToObject: (mongooses) => {
        return mongooses.map((mongoose) => mongoose.toObject());
    },

    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
