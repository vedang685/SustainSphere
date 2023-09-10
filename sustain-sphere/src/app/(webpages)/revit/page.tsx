import Blogbg from "./blogbg"
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

export default function Revit(){
    return(
        <div className="mx-3">
            <div className="relative">
                <div className="rounded-2xl border-2 border-green-700 w-full mt-6 mb-10 bg-black">
                    <img className="w-full rounded-2xl opacity-[70%] " src="/images/assets/revit/envo.png"/>
                </div>
                <div className="absolute top-[24%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className="text-white text-4xl">ENVIRONMENTAL MANAGEMENT</p>
                    <p style={pops.style} className="text-white mt-8 text-sm">Explore a premier online platform for cutting-edge environmental management solutions. Discover a wealth of resources, tools, and insights to assist your organization in achieving excellence in sustainability and environmental stewardship.</p>
                </div>
            </div>
            <div className="w-full relative overflow-hidden">
                <p style={lora.style} className="w-[70%] leading-7 ml-[15%] mb-10 text-[#495057]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br/>
                <br/>
                Sed lectus vestibulum mattis ullamcorper velit. Non consectetur a erat nam at. At quis risus sed vulputate. Dui ut ornare lectus sit amet est. Urna porttitor rhoncus dolor purus non enim praesent elementum. Et netus et malesuada fames ac turpis egestas maecenas. Nibh venenatis cras sed felis. Vitae tortor condimentum lacinia quis vel eros donec ac. Morbi tempus iaculis urna id volutpat lacus laoreet. Turpis cursus in hac habitasse platea dictumst. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Diam quam nulla porttitor massa. Malesuada proin libero nunc consequat interdum varius sit amet. Nisl purus in mollis nunc sed. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Quis lectus nulla at volutpat diam ut venenatis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.
                Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Eu tincidunt tortor aliquam nulla facilisi cras. Sit amet luctus venenatis lectus magna. Neque gravida in fermentum et sollicitudin ac orci. Pharetra sit amet aliquam id diam. Integer malesuada nunc vel risus. Egestas erat imperdiet sed euismod nisi. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Pretium quam vulputate dignissim suspendisse. Feugiat in fermentum posuere urna nec. Ut sem viverra aliquet eget sit amet.
                Etiam dignissim diam quis enim lobortis. Integer malesuada nunc vel risus commodo viverra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Tortor pretium viverra suspendisse potenti nullam ac. Enim ut tellus elementum sagittis vitae et leo duis ut. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Consequat nisl vel pretium lectus quam id leo in. Amet dictum sit amet justo donec enim diam. Volutpat commodo sed egestas egestas. Leo a diam sollicitudin tempor id eu nisl nunc. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Sociis natoque penatibus et magnis dis parturient montes nascetur. Id leo in vitae turpis massa sed elementum. Faucibus in ornare quam viverra. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Porta nibh venenatis cras sed felis eget. Quisque egestas diam in arcu cursus euismod quis viverra.
                <br/>
                <br/>
                Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Nulla facilisi morbi tempus iaculis urna id. Arcu odio ut sem nulla pharetra diam sit amet. Blandit aliquam etiam erat velit scelerisque. Sed augue lacus viverra vitae congue.
                </p>
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
                    <img className="absolute bottom-0 right-[10%] z-10" src="/images/assets/revit/Vector 7.png"/>
                    <img className="absolute bottom-0 right-0 z-0" src="/images/assets/revit/Vector 8.png"/>
                </div>
            </div>
            <Blogbg/>
        </div>
            
    )
        
}
