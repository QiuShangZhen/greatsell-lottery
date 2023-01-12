/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
    {
        type: 0,
        count: 1,
        text: "特等奖",
        title: "神秘大礼",
        img: "../img/secrit.jpg"
    },
    {
        type: 1,
        count: 10,
        text: "阳光普照奖",
        title: "福利彩票券",
        img: "../img/4.jpg"
    },
    {
        type: 2,
        count: 1,
        text: "特等奖",
        title: "神秘大礼",
        img: "../img/secrit.jpg"
    },
    {
        type: 3,
        count: 3,
        text: "一等奖",
        title: "吹风机",
        img: "../img/1.png"
    },
    {
        type: 4,
        count: 8,
        text: "二等奖",
        title: "皮带",
        img: "../img/2.jpg"
    },
    {
        type: 5,
        count: 20,
        text: "三等奖",
        title: "保温杯",
        img: "../img/3.png"
    },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 10, 1, 3, 8, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "GreatSell";

module.exports = {
    prizes,
    EACH_COUNT,
    COMPANY
};
