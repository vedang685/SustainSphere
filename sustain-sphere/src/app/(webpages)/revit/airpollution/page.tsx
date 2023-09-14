import Blogbg from "../blogbg"
import { Poppins, Lora} from "@next/font/google"

const pops = Poppins({
    weight: ["500"],
    style: ["normal"],
    subsets: ["latin"]
})
const lora = Lora({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"]
})

export default function Deforestation(){
    return(
        <div className="mx-3">
            <div className="relative">
                <div className="rounded-2xl border-2 border-green-700 w-full mt-6 mb-10 bg-black">
                    <img className="w-full rounded-2xl opacity-[70%] " src="/images/assets/revit/airpol.png"/>
                </div>
                <div className="absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className=" text-4xl">Air Pollution</p>
                </div>
                <div className="absolute sm:bottom-[5%] md:bottom-[20%] lg:bottom-[30%] xl:bottom-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className="text-white leading-6 text-xs">Explore a premier online platform for cutting-edge environmental management solutions. Discover a wealth of resources, tools, and insights to assist your organization in achieving excellence in sustainability and environmental stewardship.</p>
                </div>
            </div>
            <div className="w-full relative overflow-hidden">
                <div style={lora.style} className="w-[70%] leading-7 ml-[15%] mb-10 text-[#495057]">
                    <p style={lora.style} className="text-2xl text-black mb-8">
                        Air Pollution
                    </p>
                    <p className="text-[#495057]"> 
                        Sed lectus vestibulum mattis ullamcorper velit. Non consectetur a erat nam at. At quis risus sed vulputate. Dui ut ornare lectus sit amet est. Urna porttitor rhoncus dolor purus non enim praesent elementum. Et netus et malesuada fames ac turpis egestas maecenas. Nibh venenatis cras sed felis. Vitae tortor condimentum lacinia quis vel eros donec ac. Morbi tempus iaculis urna id volutpat lacus laoreet. Turpis cursus in hac habitasse platea dictumst. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Diam quam nulla porttitor massa. Malesuada proin libero nunc consequat interdum varius sit amet. Nisl purus in mollis nunc sed. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Quis lectus nulla at volutpat diam ut venenatis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.
                        Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Eu tincidunt tortor aliquam nulla facilisi cras. Sit amet luctus venenatis lectus magna. Neque gravida in fermentum et sollicitudin ac orci. Pharetra sit amet aliquam id diam. Integer malesuada nunc vel risus. Egestas erat imperdiet sed euismod nisi. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Pretium quam vulputate dignissim suspendisse. Feugiat in fermentum posuere urna nec. Ut sem viverra aliquet eget sit amet.
                        Etiam dignissim diam quis enim lobortis. Integer malesuada nunc vel risus commodo viverra. Massa tincidunt nunc pulvinar sapien 
                    </p>
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        Solutions
                    </p>
                    Sed lectus vestibulum mattis ullamcorper velit. Non consectetur a erat nam at. At quis risus sed vulputate. Dui ut ornare lectus sit amet est. Urna porttitor rhoncus dolor purus non enim praesent elementum. Et netus et malesuada fames ac turpis egestas maecenas. Nibh venenatis cras sed felis. Vitae tortor condimentum lacinia quis vel eros donec ac. Morbi tempus iaculis urna id volutpat lacus laoreet. Turpis cursus in hac habitasse platea dictumst. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Diam quam nulla porttitor massa. Malesuada proin libero nunc consequat interdum varius sit amet. Nisl purus in mollis nunc sed. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Quis lectus nulla at volutpat diam ut venenatis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.
                    <div className="my-4"/>
                    Sed lectus vestibulum mattis ullamcorper velit. Non consectetur a erat nam at. At quis risus sed vulputate. Dui ut ornare lectus sit amet est. Urna porttitor rhoncus dolor purus non enim praesent elementum. Et netus et malesuada fames ac turpis egestas maecenas. Nibh venenatis cras sed felis. Vitae tortor condimentum lacinia quis vel eros donec ac. Morbi tempus iaculis urna id volutpat lacus laoreet. Turpis cursus in hac habitasse platea dictumst. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Diam quam nulla porttitor massa. Malesuada proin libero nunc consequat interdum varius sit amet. Nisl purus in mollis nunc sed. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Quis lectus nulla at volutpat diam ut venenatis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.
                    
                    Sed lectus vestibulum mattis ullamcorper velit. Non consectetur a erat nam at. At quis risus sed vulputate. Dui ut ornare lectus sit amet est. Urna porttitor rhoncus dolor purus non enim praesent elementum. Et netus et malesuada fames ac turpis egestas maecenas. Nibh venenatis cras sed felis. Vitae tortor condimentum lacinia quis vel eros donec ac. Morbi tempus iaculis urna id volutpat lacus laoreet. Turpis cursus in hac habitasse platea dictumst. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Diam quam nulla porttitor massa. Malesuada proin libero nunc consequat interdum varius sit amet. Nisl purus in mollis nunc sed. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Quis lectus nulla at volutpat diam ut venenatis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.
                    <div className="my-4"/>
                    Sed lectus vestibulum mattis ullamcorper velit. Non consectetur a erat nam at. At quis risus sed vulputate. Dui ut ornare lectus sit amet est. Urna porttitor rhoncus dolor purus non enim praesent elementum. Et netus et malesuada fames ac turpis egestas maecenas. Nibh venenatis cras sed felis. Vitae tortor condimentum lacinia quis vel eros donec ac. Morbi tempus iaculis urna id volutpat lacus laoreet. Turpis cursus in hac habitasse platea dictumst. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Diam quam nulla porttitor massa. Malesuada proin libero nunc consequat interdum varius sit amet. Nisl purus in mollis nunc sed. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Quis lectus nulla at volutpat diam ut venenatis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.
                </div>
                <div className="flex w-[70%] leading-7 ml-[15%] mb-10">
                    <button className="text-[#6C757D] text-sm border-[3px] mr-2 border-[#E5E5E5] px-3 py-1 rounded-lg">tag1</button>
                    <button className="text-[#6C757D] text-sm border-[3px] mr-2 border-[#E5E5E5] px-3 py-1 rounded-lg">tag2</button>
                    <button className="text-[#6C757D] text-sm border-[3px] mr-2 border-[#E5E5E5] px-3 py-1 rounded-lg">tag3</button>
                </div>
                <div className="w-[70%] leading-7 ml-[15%] mb-10 border border-gray-300 border-solid"></div>
                <p className="w-[70%] leading-7 ml-[15%] pb-12 text-black">
                    By Author
                    <br />
                    <span className ="font-thin text-gray-600">Designation</span>
                </p>
                <div>
                    <img className="absolute bottom-0 right-0 z-0" src="/images/assets/revit/bottom.png"/>
                </div>
            </div>
            <Blogbg/>
        </div>
            
    )
        
}