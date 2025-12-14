function myFunction() {
         
         document.getElementById("Text").innerHTML = "";
         document.getElementById("Link1").innerHTML = "";
         document.getElementById("Link2").innerHTML = "";
         document.getElementById("Link3").innerHTML = "";
         document.getElementById("Link4").innerHTML = "";
         document.getElementById("Link5").innerHTML = "";
         document.getElementById("Link6").innerHTML = "";
         document.getElementById("Link7").innerHTML = "";
         document.getElementById("Link8").innerHTML = "";
         document.getElementById("Link9").innerHTML = "";
         document.getElementById("Link10").innerHTML = "";   
         document.getElementById("Link11").innerHTML = "";   

         var text;
         var person;
         var LinkCheck = document.getElementById("name").value;

         switch(LinkCheck) {
            case "https://www.facebook.com/long.hoang.7168":
                  person = "Người được chọn: Hoàng Long";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link1").innerHTML = text;
            break;

            case "https://www.facebook.com/le.hong.905038":
                  person = "Người được chọn: Hồng Ánh";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link2").innerHTML = text;
            break;

            case "https://www.facebook.com/profile.php?id=61580601516395":
                  person = "Người được chọn: Vân Anh";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link3").innerHTML = text;
            break;

            case "https://www.facebook.com/Omegaff0048":
                  person = "Người được chọn: Dũng";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link4").innerHTML = text;
            break;

            case "https://www.facebook.com/hienvuminh528":
                  person = "Người được chọn: Hiển";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link5").innerHTML = text;
            break;

            case "https://www.facebook.com/thuy.linh.nguyen.855272":
                  person = "Người được chọn: cô Linh chú Dũng ";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link6").innerHTML = text;
            break;

            case "https://www.facebook.com/bui.nga.186941":
                  person = "Người được chọn: Nga";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link7").innerHTML = text;
            break;

            case "https://www.facebook.com/khoi.bui.604070":
                  person = "Người được chọn: Khôi";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link7").innerHTML = text;
            break;

            case "https://www.facebook.com/duc.dao.420513":
                  person = "Người được chọn: anh Đức chị Hoàng Anh";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link8").innerHTML = text;
            break;

            case "https://www.facebook.com/thanhhuyen.gdc":
                  person = "Người được chọn: bố Bình mẹ Huyền";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link9").innerHTML = text;
            break;

            case "https://www.facebook.com/Binh.DaoQ":
                  person = "Người được chọn: bố Bình mẹ Huyền";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link10").innerHTML = text;
            break;
            
            case"https://www.facebook.com/YuukiTT1710":
                  person = "Người được chọn: Trang";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link11").innerHTML = text;
            break;

            case"https://www.facebook.com/vu.dao.1006":
                  person = "Người được chọn: Vũ Đào";
                  text = ">>Nhấp vào đây<<";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Link12").innerHTML = text;
            break;

            case "":
                  person = "Bạn không phải người được chọn!";
                  text = "Máy đang bị virus tấn công...";
                  document.getElementById("Text").innerHTML = person; 
                  document.getElementById("Text").innerHTML = text;
            break;
            
            default:
                  text = "Link của bạn không chính xác hoặc không có trong danh sách!";
                  document.getElementById("Text").innerHTML = text;
            break;
         }
      }
