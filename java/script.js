
var wallimage = ["https://img.playbook.com/5yFsfzeSsPJ7FER4uJFNZv4Bc-TZnzSYGcvaCyDoyGo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q2ZDgzMDEy/LTY1OWMtNGFiOC1i/NDdjLTBmZGI2YzFl/ZjRkMw",
    "https://img.playbook.com/PbYLwIc7BnSITrJiTIiM9Stllx71TtjWKd0ZloTOqmU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZiM2ZmNTJj/LTU5MGQtNGFmNS1i/NjU1LWEyYzlmNmYz/MDU3OA",
    "https://img.playbook.com/xETosohcqswOQLg4LFB7BVIYkMVLvoSbPUAP3GJAkYg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzgzMzViMjU1/LTllNDQtNDA4OC1i/NTc1LTFiMGI3ZGEz/MTJmZA",
    "https://img.playbook.com/92qvvEP7Rw__m_oV7hBjTJaxaDChmFGRDAapJ_x_Xsk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NkZDM3Y2Q0/LTgyOWYtNGUxMS1i/ZDc4LTg0ODYzMjJh/NzA2OA",
    "https://img.playbook.com/E5T8NEEIDv3iaXy4kqvLtTCtomrVHsUa-Ww0CBhKhY0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JiMDNiMWVl/LTBlZmMtNGQyMy05/MzJlLTFhOWFlODZh/OGI0ZQ",
    "https://img.playbook.com/DN7ZVgeI4GLFxOMJW176sxtR-xDINaeqcz-cDtIy5Rc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M3ZjgyYTQ3/LTBlNDAtNDc0OC05/OTg4LTczZGNjMGMw/ZWFkNw",
    "https://img.playbook.com/bvn4w9QwTekADSTQGiaXN1v92JqcpaUw9HeF5x8sd7Y/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzY2MjU0ZGFk/LTQ5MzQtNDEzYy04/ZjczLTk1MDA4ZjE1/MGI5NA",
    "https://img.playbook.com/9J26pMBN-kZKBmSBRV78Rq_UoE_0Stt5gv-GcFZnxxc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MyNjRlYmQy/LTRmZjUtNGVjYS1i/MWFjLTdiYjQ1NjQw/MjIwMw",
    "https://img.playbook.com/wu1w_PagSg7J9OpZKJdF3-9GvNeUmbZKIXUrL-NGVUA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdmOTRhM2Vi/LTZiN2MtNDIyYi05/ODhlLTY1NWVjYzgx/NzQxMQ",
    "https://img.playbook.com/t2SvSRzmhf1QWqBpxkzAjOWcFQW-J3SWSe1CYtHSkro/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2EyODFmMjU3/LTE3NjUtNDNiMC04/ZGU2LWZmYTVlNDdk/NjhiNQ",
    "https://img.playbook.com/Q07eK5du1C8aJt-jryUgd43Mk9zQeE9emautFQGbPCk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM5Y2FkZGNm/LWQ3ZDAtNDcyMS05/YWRlLTM4ZmE0OTI1/YmZhZg",
    "https://img.playbook.com/Z7kRKzqYR3SRLjsM3PTPISJ4XCr1EbKicOUgGJGn9jc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZmZTIwMzEw/LTM4OGEtNGU0Ni1h/MzY3LWNkYzE2ZTY4/ZWQ3Yw",
    "https://img.playbook.com/Bo6AyDe5DrcBrHYQi1eltVGK71Is2SSidur7Xv4fiM0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzJiMjNiMWMw/LTViMWQtNGQyYi1i/ZmJmLWFhODJiYzVm/NGE1ZQ",
    "https://img.playbook.com/gOyVwVeBnN-f2-ayAp_acSKQstB7xzbEViyeoXCHoFQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzJmZTlhY2Ey/LWE0NjYtNDU2Yi05/MmI0LTExZGU0YWM2/NDBmMw",
    "https://img.playbook.com/goD5TraHtMTjqrkJI2VzuXc6t_S9XQvVyDYRwkB9E7k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IzYmFjMTg5/LTdhZTEtNDRhMy04/ZWJlLTVmYzNjMjg3/MDU4Yg",
    "https://img.playbook.com/lKqN_qYZS2yRyR_SQevZoXrmeCMP7fmqG5-hDvxORCY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlmNjljM2Q1/LTQ2OTktNGVmOC04/NWExLWUyN2QwZDg1/YzUzOQ",
    "https://img.playbook.com/lKqN_qYZS2yRyR_SQevZoXrmeCMP7fmqG5-hDvxORCY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlmNjljM2Q1/LTQ2OTktNGVmOC04/NWExLWUyN2QwZDg1/YzUzOQ",
    "https://img.playbook.com/0s1JNTWLR0pnjebLoEs1BJIrlH7lHHZqPWGupojS4JE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk3ZmRmNGNh/LTVlOGItNDNiZi1i/ZDdiLTZmOGNiNTE3/YWFkNw",
    "https://img.playbook.com/d7x8y7MN2fdj3tkHy8D-2nBwMagJkc9dzXg-rcd4L1I/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MxYWE2N2E4/LTcyZjctNGRlNi05/ZDRjLWE4MTg2ZTk4/MmZlNA",
    "https://img.playbook.com/0ZOmHHF4Urks6bEmFakm2ePjzNpRcYhb7yVrXvehJ78/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzI0MDQ4ODlj/LTRiZjEtNDRlMC1h/ZmExLTE2ZTFhYjIw/Nzk2Yg"
];

var allimages = ["https://img.playbook.com/5yFsfzeSsPJ7FER4uJFNZv4Bc-TZnzSYGcvaCyDoyGo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q2ZDgzMDEy/LTY1OWMtNGFiOC1i/NDdjLTBmZGI2YzFl/ZjRkMw",
"https://img.playbook.com/KnpDPt1YlGzeA9aExu8JT_wgrcNj8gPQLwttib8pEZw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M5ZGIzNzZm/LTIxYmItNDc3Ni04/MWU1LTNlYWRjYjQ3/ZDQ4Nw",
"https://img.playbook.com/PbYLwIc7BnSITrJiTIiM9Stllx71TtjWKd0ZloTOqmU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZiM2ZmNTJj/LTU5MGQtNGFmNS1i/NjU1LWEyYzlmNmYz/MDU3OA",
"https://img.playbook.com/g9LB4Vz3PbYm-IjT6MrJ0oA8HmoHX-V6jmU2FJbwjXs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2YzYzkzYjVm/LWNiM2ItNDg5Ny1i/OWNiLWQ1MDI0YWUz/ZjcyMw",
"https://img.playbook.com/xETosohcqswOQLg4LFB7BVIYkMVLvoSbPUAP3GJAkYg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzgzMzViMjU1/LTllNDQtNDA4OC1i/NTc1LTFiMGI3ZGEz/MTJmZA",
"https://img.playbook.com/02QbotA1f9xWiHVduqO9z74pz-sAXEC_HsgJSb-iax0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RkMGQ2ODZi/LThlOWEtNGE2Yi1h/ODlmLTk1OTVmMDZj/NDgzYQ",
"https://img.playbook.com/Bo6AyDe5DrcBrHYQi1eltVGK71Is2SSidur7Xv4fiM0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzJiMjNiMWMw/LTViMWQtNGQyYi1i/ZmJmLWFhODJiYzVm/NGE1ZQ",
"https://img.playbook.com/kDiPzxdSzuKNzq2LjlOs0kMHyHNUlwPcMmp9eDLGgRg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ExMzc5OGVi/LWVhMTYtNDk0Yy1h/NzE1LTI0YWIwOTVj/MTQ1Nw",
"https://img.playbook.com/gOyVwVeBnN-f2-ayAp_acSKQstB7xzbEViyeoXCHoFQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzJmZTlhY2Ey/LWE0NjYtNDU2Yi05/MmI0LTExZGU0YWM2/NDBmMw",
"https://img.playbook.com/QgGkp1seU1OvlyZXp2t5Ut4a3ux3iCcYn_o7IJ-rsto/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc2Njc0MzJk/LTJiZjEtNDczMS05/ZTI0LTMzMzMzMGIw/Nzc2ZA",
"https://img.playbook.com/92qvvEP7Rw__m_oV7hBjTJaxaDChmFGRDAapJ_x_Xsk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NkZDM3Y2Q0/LTgyOWYtNGUxMS1i/ZDc4LTg0ODYzMjJh/NzA2OA",
"https://img.playbook.com/E5T8NEEIDv3iaXy4kqvLtTCtomrVHsUa-Ww0CBhKhY0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JiMDNiMWVl/LTBlZmMtNGQyMy05/MzJlLTFhOWFlODZh/OGI0ZQ",
"https://img.playbook.com/Mj2rV5rYLc92hmcXTTXHWh21LTAcPtcAD4C3zHo5Ku0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VlN2RhMjEw/LTdiZWMtNGRlMy1h/Y2RlLTc3YWMzNDc3/OTUyYw",
"https://img.playbook.com/pNuWGdlehBgb4A2WiuI4I9TFafPU4tL4ZvWv7eh6RcQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q0NjBhZTI3/LThlNjUtNDg0OS1i/Nzg3LWUxODFiNWJl/MmQ5Yw",
"https://img.playbook.com/DN7ZVgeI4GLFxOMJW176sxtR-xDINaeqcz-cDtIy5Rc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M3ZjgyYTQ3/LTBlNDAtNDc0OC05/OTg4LTczZGNjMGMw/ZWFkNw",
"https://img.playbook.com/b4tfbIP_M5f3XFooR0ngmFMwiD0OGu3Ed8XwVBQ2HdE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q5NDFkYmFi/LWFmZjAtNDgxYS05/OTJmLTliMWJjYmZi/MjhlMA",
"https://img.playbook.com/goD5TraHtMTjqrkJI2VzuXc6t_S9XQvVyDYRwkB9E7k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IzYmFjMTg5/LTdhZTEtNDRhMy04/ZWJlLTVmYzNjMjg3/MDU4Yg",
"https://img.playbook.com/lKqN_qYZS2yRyR_SQevZoXrmeCMP7fmqG5-hDvxORCY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlmNjljM2Q1/LTQ2OTktNGVmOC04/NWExLWUyN2QwZDg1/YzUzOQ",
"https://img.playbook.com/bvn4w9QwTekADSTQGiaXN1v92JqcpaUw9HeF5x8sd7Y/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzY2MjU0ZGFk/LTQ5MzQtNDEzYy04/ZjczLTk1MDA4ZjE1/MGI5NA",
"https://img.playbook.com/ZQEJkhd3PYF689aj1_i-2q_0iWXmWZ3a2wv9Ug97mZM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzRlMmYyYmFh/LWE2MWEtNDkyMi04/MzU1LWRhOTlkM2M2/MTAyZA",
"https://img.playbook.com/9J26pMBN-kZKBmSBRV78Rq_UoE_0Stt5gv-GcFZnxxc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MyNjRlYmQy/LTRmZjUtNGVjYS1i/MWFjLTdiYjQ1NjQw/MjIwMw",
"https://img.playbook.com/QbXzoAXjdhgIhb9z-Y5CDAWMLSBOB6sldLjpbGzWAck/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2FlZDk3YjQ1/LTk3Y2ItNGQwNi04/NzU1LTRjYTkxZTA1/NWVkYg",
"https://img.playbook.com/wu1w_PagSg7J9OpZKJdF3-9GvNeUmbZKIXUrL-NGVUA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdmOTRhM2Vi/LTZiN2MtNDIyYi05/ODhlLTY1NWVjYzgx/NzQxMQ",
"https://img.playbook.com/Dey7HtQmMbXC-2XZV8LX4CrNPSa2oKn6hwwqj5vngGE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q2ODUwYzRk/LWQ1NTUtNDVlZC04/MmMxLTMyYzRhOTY5/MTk3Mw",
"https://img.playbook.com/lKqN_qYZS2yRyR_SQevZoXrmeCMP7fmqG5-hDvxORCY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlmNjljM2Q1/LTQ2OTktNGVmOC04/NWExLWUyN2QwZDg1/YzUzOQ",
"https://img.playbook.com/LQ84wg7fMW2nYJ_04BNV4s9XTPDWvL4RUywTH0eUTFE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNkNTViOWEw/LWE0OTctNGIzZS05/NTcwLTA0YmJkNDFk/YTkwOA",
"https://img.playbook.com/0s1JNTWLR0pnjebLoEs1BJIrlH7lHHZqPWGupojS4JE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk3ZmRmNGNh/LTVlOGItNDNiZi1i/ZDdiLTZmOGNiNTE3/YWFkNw",
"https://img.playbook.com/UDyaWtRIcq8mIyiA-Wtv6Exg_UAq6iCZkPcqcd6Nf_E/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzEzODczYjU1/LWI0ODctNDgyMC1i/OTI3LTVjNzkyYTE5/N2Y2Ng",
"https://img.playbook.com/t2SvSRzmhf1QWqBpxkzAjOWcFQW-J3SWSe1CYtHSkro/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2EyODFmMjU3/LTE3NjUtNDNiMC04/ZGU2LWZmYTVlNDdk/NjhiNQ",
"https://img.playbook.com/Q07eK5du1C8aJt-jryUgd43Mk9zQeE9emautFQGbPCk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM5Y2FkZGNm/LWQ3ZDAtNDcyMS05/YWRlLTM4ZmE0OTI1/YmZhZg",
"https://img.playbook.com/VlcNSTatxvSQp9DWbxmR2ZK5fDxUe4Rv7o0J3ie9-Vs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M1NDQzNjgw/LWIyYjktNDExZS04/N2NmLTY5MmJjNGVk/YTliMw",
"https://img.playbook.com/r4iQD-1kC_CgkgitnpfpptOPvrJ6TvMbTA5ZuocVq7k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2FmNzM1Yzg2/LTg0NTYtNDIxOC1i/ODFmLTA1ODQxNzA2/NDM4Zg",
"https://img.playbook.com/Bo6AyDe5DrcBrHYQi1eltVGK71Is2SSidur7Xv4fiM0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzJiMjNiMWMw/LTViMWQtNGQyYi1i/ZmJmLWFhODJiYzVm/NGE1ZQ",
"https://img.playbook.com/d7x8y7MN2fdj3tkHy8D-2nBwMagJkc9dzXg-rcd4L1I/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MxYWE2N2E4/LTcyZjctNGRlNi05/ZDRjLWE4MTg2ZTk4/MmZlNA",
"https://img.playbook.com/0ZOmHHF4Urks6bEmFakm2ePjzNpRcYhb7yVrXvehJ78/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzI0MDQ4ODlj/LTRiZjEtNDRlMC1h/ZmExLTE2ZTFhYjIw/Nzk2Yg",]



var currentindex = 0

img = document.getElementById("mount")

var increment = function(){
    currentindex ++
    if ( currentindex > wallimage.length - 1){
        currentindex = 0
    }
    return currentindex   
};

var changepic = function(){
    img.src=wallimage[increment()]
    setTimeout(changepic,60000) 
};

changepic()



var wallimage_hover = document.querySelectorAll(".box-content > a")
var modal = document.querySelector(".modal")
var modalImg = document.querySelector(".modal-img")
var close = document.querySelector(".close")
var navbar = document.querySelector(".navbar")

wallimage_hover.forEach(function(element){
    element.addEventListener("mouseover",function(){
        this.style.opacity = "0.5";
    });
    element.addEventListener("mouseout",function(){
        this.style.opacity = "1";
    });

    element.addEventListener("click", function(event){
        event.preventDefault();
        modal.style.display = "block";
        modalImg.src=this.querySelector('img').src;
        navbar.style.display = "none";
        var currentimgIndex = function(){
            for(j=0; j<allimages.length; j++){
                if(allimages[j] === modalImg.src){
                    var imgIndex = j;
                    return imgIndex
                };
            }
        }
        var nxtbtn = document.querySelector("#next-btn")
        var prevbtn = document.querySelector("#prev-btn")

        var incrementIndex = function(){
            var currentinindex = currentimgIndex()
            currentinindex += 1
            if (currentinindex > allimages.length - 1) {currentinindex = 0}
            return currentinindex;
        };

        var decrementIndex = function(){
            var currentinindex = currentimgIndex()
            currentinindex = currentinindex - 1;
            if(currentinindex < 0) {currentinindex = allimages.length - 1}
            return currentinindex;
        };

        nxtbtn.onclick = function(){
            modalImg.src = allimages[incrementIndex()]
        }

        prevbtn.onclick = function(){
            modalImg.src = allimages[decrementIndex()]
        }
    })
});

var wallimage_hover_moreimg = document.querySelectorAll(".moreimg > a")
wallimage_hover_moreimg.forEach(function(element){
    element.addEventListener("mouseover",function(){
        this.style.opacity = "0.5";
    });
    element.addEventListener("mouseout",function(){
        this.style.opacity = "1";
    });

    element.addEventListener("click", function(event){
        event.preventDefault();
        modal.style.display = "block";
        modalImg.src=this.querySelector('img').src;
        navbar.style.display = "none"
        var currentimgIndex = function(){
            for(j=0; j<allimages.length; j++){
                if(allimages[j] === modalImg.src){
                    var imgIndex = j;
                    return imgIndex
                };
            }
        }
        var nxtbtn = document.querySelector("#next-btn")
        var prevbtn = document.querySelector("#prev-btn")

        var incrementIndex = function(){
            var currentinindex = currentimgIndex()
            currentinindex += 1
            if (currentinindex > images.length - 1) {currentinindex = 0}
            return currentinindex;
        };

        var decrementIndex = function(){
            var currentinindex = currentimgIndex()
            currentinindex = currentinIndex - 1;
            if(currentinindex < 0) {currentinindex = images.length - 1}
            return currentinindex;
        };

        nxtbtn.onclick = function(){
            modalImg.src = allimages[incrementIndex()]
        }

        prevbtn.onclick = function(){
            modalImg.src = allimages[decrementIndex()]
        }
    });

});


close.addEventListener('click',function(){
    modal.style.display = "none"
    navbar.style.display = "flex"
});

window.addEventListener('click',function(event){
    if (event.target == modal){
        modal.style.display = "none"
        navbar.style.display = "flex"
    }
});

var moreimg = document.querySelectorAll(".moreimg")
var morebtn = document.getElementById("morebtn")
    
morebtn.addEventListener("click",function(){
    moreimg.forEach(function(element){
        if(element.style.display==="none"){
            element.style.display = "block";
            morebtn.innerHTML = "Show Less";
        }else{
            element.style.display = "none";
            morebtn.innerHTML = "Show More";
        };
    });
});

