
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
var navbar = document.querySelector("#navbar")

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
    });

});

close.addEventListener('click',function(){
    modal.style.display = "none"
});

window.addEventListener('click',function(event){
    if (event.target == modal){
        modal.style.display = "none"
    }
});
