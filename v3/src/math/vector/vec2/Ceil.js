let vec2 = Float32Array;

export default function (a, dst = new vec2(2)) {

    dst[0] = Math.ceil(a[0]);
    dst[1] = Math.ceil(a[1]);

    return dst;

}
