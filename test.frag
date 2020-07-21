uniform vec2 u_resolution;
uniform vec2 u_mouse;

vec2 set_screen(vec2 coord_vec) {     // normalize coords and set origin to center
    vec2 uv = coord_vec.xy/u_resolution;
    uv = uv - 0.5;
    uv.x = uv.x * u_resolution.x/u_resolution.y;
    return uv;
}


void main() {
//    vec2 uv = gl_FragCoord.xy/u_resolution;
////    uv = uv - 0.5;
//    uv.y = uv.y * u_resolution.y/u_resolution.x;
//    vec2 uvm = u_mouse/u_resolution;
//    uvm.y = uvm.y * u_resolution.y/u_resolution.x;

    vec2 uv = set_screen(gl_FragCoord.xy);
    vec2 uvm = set_screen(u_mouse);


    float d = length(uv-uvm);
    float r = 0.15;
    float c = smoothstep(r,r-0.01,d); 


    gl_FragColor = vec4(vec3(c),1.0);
}
