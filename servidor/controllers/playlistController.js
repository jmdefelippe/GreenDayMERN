const Playlist = require('../models/Playlist');

/** Obtiene todas las playlists */
exports.obtenerPlaylists = async (req, res, next) => {
    try {
        const playlists = await Playlist.find({});
        res.json(playlists);
    } catch (error) {
        console.log(error);
        next();
    }
}