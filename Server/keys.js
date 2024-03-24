module.exports = {
    PORT: process.env.PORT || 8080,
    MONGODB_ATLAS_URI: process.env.MONGODB_ATLAS_URI || 'mongodb+srv://osanda20220325:qE35HFSsFUgfpEQV@cluster0.2r3ddda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    MONGODB_LOCAL_URI: process.env.MONGODB_LOCAL_URI || 'hello',
    SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY || 'e7926e397165c0c15aa8f43ad726e9ce6d45e45313906a89d1d151c3d484177fe09f0fb3eb68e259b1d3265efe739cd16006e97a334df58a6cc1727853cc05cb',
    TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY || '43ad726e9ce6d45e45313906a8'
};