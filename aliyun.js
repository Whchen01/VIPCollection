/***********************************



[rewrite_local]

# ～ 阿里云盘（2022-10-16）
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ url script-response-body 

[mitm]

hostname=api.aliyundrive.com

***********************************/

let obj = JSON.parse($response.body);
if (obj.result) {
    obj.result = Object.values(obj.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
}
$done({ body: JSON.stringify(obj) });
