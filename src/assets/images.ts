/* App config for images
 */
const Images = {
    icons: {
        selected: require('./icon/ic_select.png'),
        back: require('./icon/ic_back.png'),
        menu: require('./icon/menu.png'),
        search: require('./icon/search.png'),
        star: require("./icon/star.png"),
        tab: {
            home: require('../assets/icon/home.png'),
            notification: require('../assets/icon/notify.png'),
            setting: require('../assets/icon/save.png'),
            account: require('../assets/icon/conpom.png'),
        },
        radio: {
            check: require('./icon/ic_check_radio.png'),
            uncheck: require('./icon/ic_uncheck_radio.png'),
        },
        calendar: require('./icon/ic_calendar.png'),
        checkBox: {
            check: require('./icon/ic_check_square.png'),
            uncheck: require('./icon/ic_uncheck_square.png'),
        },
    },
    photo: {
        defaultImage: require('./photo/img_default_image.png'),
        backgroundImage: require('./photo/background.png')
    },
};

export default Images;
