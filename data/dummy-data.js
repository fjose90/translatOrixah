import Orixa from "../models/Orixa";
import Music from "../models/Music";

export const ORIXAS = [
    new Orixa("o1", "Exú", "#ff0000"),
    new Orixa("o2", "Ogum", "#2500b2"),
    new Orixa("o3", "Oxóssi", "#00c5d2"),
    new Orixa("o4", "Ossaim", "#62ee57"),
    new Orixa("o5", "Iroco", "#008337"),
    new Orixa("o6", "Obaluaê", "#000000"),
    new Orixa("o7", "Oxumarê", "#fdef35"),
    new Orixa("o8", "Xangô", "#ff0000"),
    new Orixa("o9", "Ayrá", "#2500b2"),
    new Orixa("o10", "Euá", "#ff3a26"),
    new Orixa("o11", "Obá", "#fd9100"),
    new Orixa("o12", "Iansã", "#ab6441"),
    new Orixa("o13", "Oxum", "#fdef35"),
    new Orixa("o14", "Logum Edé", "#3815ff"),
    new Orixa("o15", "Iemanjá", "#c0f35a"),
    new Orixa("o16", "Nanã", "#9e00ff"),
    new Orixa("o17", "Oxalá", "#ffffff"),
];

export const MUSICS = [
    new Music(
        "m1",
        "o1",
        "Cantiga 01",
        ["EXÚ TÁ-LÁ NILORÉ", "EXÚ TÁ-LÁ NILORÉ-Ô"],
        "/fileMusic"
    ),
    new Music(
        "m2",
        "o1",
        "Cantiga 02",
        ["EXÚ-Ô", "EXÚ OLONÃ", "MOFORUM BALÉ", "EXÚ-Ô"],
        "/fileMusic"
    ),
    new Music(
        "m3",
        "o1",
        "Cantiga 03",
        ["EXÚ-Ô", "EXÚ OLONÃ", "MOFORUM BALÉ", "EXÚ-Ô"],
        "/fileMusic"
    ),
    new Music(
        "m4",
        "o1",
        "Cantiga 04",
        [
            "Ê IBARABÔ Ê MOJUBÁ RÁ",
            "Ê BAKOXÉ ",
            "EXÚ BARABÔ AGÔ MOJUBÁ RÁ-Ê",
            "MABEKÓ IKÓ ",
            "IBARABÔ ÊMOJUBA 'RÁ ",
            "LEBARA EXÚ LONÃ",
            "Ê IBARABÔ AGÔ MOJUBÁ RÁ",
            "Ê BAKOXÉ ",
            "EXU BARABÔ AGÔ MOJUBA 'RÁ ",
            "Ê MABEXIRÊ",
            "EXÚ BARABÔ AGÔ MOJUBA 'RÁ ",
            "LEBARA EXU LONÃ",
        ],
        "/fileMusic"
    ),
    new Music(
        "m5",
        "o1",
        "Cantiga 05",
        ["ORÍ SAPATÁ AGÔ NILÊ", "AGÔ NILÊ MOFORUM BALÉ", "ORÍ SAPATÁ AGÔ NILÊ"],
        "/fileMusic"
    ),
    new Music(
        "m6",
        "o1",
        "Cantiga 06",
        [
            "EXÚ LONÃ, EXÚ LONÃ",
            "MOTIRÊ LODÊ ELEBARA",
            "ELEBARA XIRÊ",
            "EXÚ TALÁ KEWÁ Ô",
        ],
        "/fileMusic"
    ),
    new Music(
        "m7",
        "o1",
        "Cantiga 07",
        [
            "Ê ODARA LÔ XORÔ",
            "ODARA LÔ XORÔ LONÃ",
            "ODARA LÔ XORÔ",
            "ODARA LÔ XORÔ LONÃ",
        ],
        "/fileMusic"
    ),
];
