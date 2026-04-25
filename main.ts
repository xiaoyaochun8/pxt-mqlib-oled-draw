/**
 * mqOled blocks
 */
//% groups=['oled-使用画布画图']
namespace mqlib {

    /**
     * Create a 16x16 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-使用画布画图'
    //% weight=100
    //% block="oled点阵16x16"
    //% imageLiteral=1
    //% imageLiteralColumns=16
    //% imageLiteralRows=16
    //% imageLiteralScale=1
    //% shim=images::createImage
    export function oledCharacterPixels1616(i: string): Image {
        return <Image><any>i;
    }
    /**
     * Create a 16x16 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-使用画布画图'
    //% weight=100
    //% block="oled点阵16x16_2"
    //% imageLiteral=1
    //% imageLiteralColumns=16
    //% imageLiteralRows=16
    //% imageLiteralScale=2
    //% shim=images::createImage
    export function oledCharacterPixels1616_2(i: string): Image {
        return <Image><any>i;
    }
    /**
     * Create a 16x16 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-使用画布画图'
    //% block="oled画图16x16 $im 在位置x: $xStart, y $yStart"
    //% weight=99
    export function oledDrawImgWithPixels1616(im: Image, xStart: number = 0, yStart: number = 0): void {
        for (let y = 0; y < 16; y++) {
            for (let x = 0; x < 16; x++) {
                if (im.pixel(x, y)) {
                    OLED12864_I2C.setPixelData(x + xStart, y + yStart, 1)
                }
            }
        }
        OLED12864_I2C.draw()
    }
    /**
     * Create a 16x16 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-使用画布画图'
    //% block="oled画图16x16 $im 缩放 $scale"
    //% weight=99
    //% scale.min=1 scale.max=4 scale.defl=1
    export function oledDrawImgWithPixels1616Scale(im: Image, scale: number = 1): void {
        for (let y = 0; y < 16; y++) {
            for (let x = 0; x < 16; x++) {
                if (im.pixel(x, y)) {
                    OLED12864_I2C.setPixelData(x * scale, y * scale, 1)
                }
            }
        }
        OLED12864_I2C.draw()
    }

}
