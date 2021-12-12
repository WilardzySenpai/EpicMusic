module.exports = {
    app: {
        px: 'd?',
        token: 'OTA5NzQxNzE0NjE5NjYyMzY4.YZIs_g.qtiuV-VQxcBRJnP7ufByZ2tInLA',
        playing: 'SkyAnime Music'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 999999999999999999999999999999999999999999999999999999999999999999999999999999,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
