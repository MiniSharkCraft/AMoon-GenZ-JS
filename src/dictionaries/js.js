/**
 * ⚡ TỪ ĐIỂN JS - AMoon GenZ Edition
 * Toàn bộ JavaScript nhưng bằng tiếng Việt của người yêu code
 * File .agz = AMoon GenZ dịch sang JS thật
 */
module.exports = [

    // ╔══════════════════════════════════════════════════════╗
    // ║  🏗️  CỐT LÕI - SYNTAX CĂN BẢN                       ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "chốt_kèo",                 js: "const"                         }, // const
    { genz: "biến_thể",                 js: "let"                           }, // let
    { genz: "thời_xưa_dùng",            js: "var"                           }, // var (tránh dùng)
    { genz: "triệu_hồi",                js: "require"                       }, // require()
    { genz: "nhập_hàng",                js: "import"                        }, // import
    { genz: "nguồn_gốc",                js: "from"                          }, // from
    { genz: "xuất_khẩu",                js: "export"                        }, // export
    { genz: "xuất_mặc_định",            js: "export default"                }, // export default
    { genz: "kỹ_năng",                  js: "function"                      }, // function
    { genz: "cook",                     js: "return"                        }, // return
    { genz: "đợi_tí",                   js: "await"                         }, // await
    { genz: "bất_biến",                 js: "async"                         }, // async
    { genz: "la_làng",                  js: "console.log"                   }, // console.log
    { genz: "mũi_tên_vàng",             js: "=>"                            }, // arrow function
    { genz: "ba_chấm_buồn",             js: "..."                           }, // spread/rest
    { genz: "hỏi_chấm_chấm",            js: "??"                            }, // nullish coalescing
    { genz: "hỏi_chấm_một",             js: "?."                            }, // optional chaining
    { genz: "theo_kiểu",                js: "typeof"                        }, // typeof
    { genz: "thừa_kế_thôi",             js: "instanceof"                    }, // instanceof
    { genz: "mới_tinh",                 js: "new"                           }, // new
    { genz: "trong_lớp",                js: "class"                         }, // class
    { genz: "mở_rộng",                  js: "extends"                       }, // extends
    { genz: "xóa_đi",                   js: "delete"                        }, // delete operator
    { genz: "bao_nhiêu_vậy",            js: "typeof"                        }, // typeof alias
    { genz: "tự_chạy_ngay",             js: "(function(){})()"              }, // IIFE

    // ╔══════════════════════════════════════════════════════╗
    // ║  ⚖️  ĐIỀU KIỆN & VÒNG LẶP                            ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "với_điều_kiện",             js: "if"                            }, // if
    { genz: "còn_không_thì",             js: "else"                          }, // else
    { genz: "cũng_được_chứ",             js: "else if"                       }, // else if
    { genz: "vòng_lặp_vô_tận",           js: "while"                         }, // while
    { genz: "cày_cuốc",                  js: "for"                           }, // for
    { genz: "dạo_quanh",                 js: "of"                            }, // for...of
    { genz: "soi_nhà_người",             js: "in"                            }, // for...in
    { genz: "chọn_mặt_gửi_vàng",         js: "switch"                        }, // switch
    { genz: "trường_hợp",                js: "case"                          }, // case
    { genz: "trường_hợp_còn_lại",        js: "default"                       }, // default
    { genz: "ngắt_kết_nối",              js: "break"                         }, // break
    { genz: "đi_tiếp_đi",               js: "continue"                      }, // continue
    { genz: "ba_ngôi",                   js: "?"                             }, // ternary operator
    { genz: "hoặc_kia",                  js: ":"                             }, // ternary else part

    // ╔══════════════════════════════════════════════════════╗
    // ║  💔  LOGIC & GIÁ TRỊ ĐẶC BIỆT                       ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "mãi_yêu",                  js: "true"                          }, // true
    { genz: "hết_yêu",                  js: "false"                         }, // false
    { genz: "mập_mờ",                   js: "null"                          }, // null
    { genz: "đéo_có_đâu",               js: "null"                          }, // null alias toxic
    { genz: "người_lạ_ơi",              js: "undefined"                     }, // undefined
    { genz: "clgv",                     js: "undefined"                     }, // undefined alias toxic
    { genz: "cạn_lời",                  js: "NaN"                           }, // NaN
    { genz: "vô_tận",                   js: "Infinity"                      }, // Infinity
    { genz: "và_lại",                   js: "&&"                            }, // &&
    { genz: "hoặc_là",                  js: "||"                            }, // ||
    { genz: "phủ_nhận",                 js: "!"                             }, // !
    { genz: "trùng_khớp",               js: "==="                           }, // ===
    { genz: "gần_giống",                js: "=="                            }, // ==
    { genz: "không_phải_mày",           js: "!=="                           }, // !==
    { genz: "lớn_hơn",                  js: ">"                             }, // >
    { genz: "nhỏ_hơn",                  js: "<"                             }, // <
    { genz: "lớn_hơn_bằng",             js: ">="                            }, // >=
    { genz: "nhỏ_hơn_bằng",             js: "<="                            }, // <=

    // ╔══════════════════════════════════════════════════════╗
    // ║  🔥  ERROR HANDLING - Xử Lý Lỗi                     ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "bắt_thằng_vấp_cỏ",         js: "try"                           }, // try
    { genz: "đm_lỗi_kìa",               js: "catch"                         }, // catch
    { genz: "dù_sao_thì",               js: "finally"                       }, // finally
    { genz: "ném_mẹ_đi",                js: "throw new Error"               }, // throw new Error
    { genz: "cút_luôn",                 js: "process.exit(1)"               }, // process.exit(1)
    { genz: "đúng_nhận_sai_cãi",        js: "assert"                        }, // assert
    { genz: "bốc_phét",                 js: "mock"                          }, // mock
    { genz: "đm_lại_lỗi",               js: "error"                         }, // error
    { genz: "nghiệp_quật",              js: "exception"                     }, // exception
    { genz: "ăn_cứt_rồi",               js: "fail"                          }, // fail
    { genz: "thằng_nhát_gan",           js: "warning"                       }, // warning

    // ╔══════════════════════════════════════════════════════╗
    // ║  🌐  HTTP STATUS CODES                               ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "200_oke",                  js: "status(200)"                   }, // 200 OK
    { genz: "sinh_thành_mới",           js: "status(201)"                   }, // 201 Created
    { genz: "ăn_hại",                   js: "status(500)"                   }, // 500 Server Error
    { genz: "éo_cho_vào",               js: "status(403)"                   }, // 403 Forbidden
    { genz: "nhìn_cái_cc",              js: "status(404)"                   }, // 404 Not Found
    { genz: "cái_lol_gì_mày_gửi",       js: "status(400)"                   }, // 400 Bad Request
    { genz: "mày_là_ai",                js: "status(401)"                   }, // 401 Unauthorized
    { genz: "tao_nhanh_lắm",            js: "status(429)"                   }, // 429 Too Many Requests
    { genz: "server_đang_ngủ",          js: "status(503)"                   }, // 503 Unavailable

    // ╔══════════════════════════════════════════════════════╗
    // ║  📡  WEB & HTTP                                      ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "đớp",                      js: "get"                           }, // GET request
    { genz: "tỏ_tình",                  js: "post"                          }, // POST request
    { genz: "chỉnh_sửa",                js: "put"                           }, // PUT request
    { genz: "vá_víu",                   js: "patch"                         }, // PATCH request
    { genz: "chia_tay",                 js: "delete"                        }, // DELETE request
    { genz: "phản_hồi",                 js: "send"                          }, // send response
    { genz: "nghe_ngóng",               js: "listen"                        }, // server listen
    { genz: "dẫn_mối",                  js: "use"                           }, // app.use()
    { genz: "hàng_về",                  js: "body"                          }, // req.body
    { genz: "bí_mật",                   js: "secret"                        }, // JWT secret
    { genz: "niêm_phong",               js: "sign"                          }, // jwt.sign
    { genz: "giải_mã",                  js: "verify"                        }, // jwt.verify
    { genz: "vật_tế_thần",              js: "middleware"                    }, // middleware
    { genz: "đi_chợ",                   js: "fetch"                         }, // fetch()
    { genz: "hỏi_thăm",                 js: "request"                       }, // request
    { genz: "trả_lời_tin_nhắn",         js: "response"                      }, // response
    { genz: "thẻ_vàng",                 js: "token"                         }, // token
    { genz: "hộ_chiếu",                 js: "auth"                          }, // auth
    { genz: "đầu_gấu",                  js: "header"                        }, // header
    { genz: "đường_dây_nóng",           js: "url"                           }, // url
    { genz: "thông_tin_mật",            js: "payload"                       }, // payload
    { genz: "nhập_tràng",               js: "payload"                       }, // payload alias
    { genz: "chờ_trong_vô_vọng",        js: "timeout"                       }, // timeout
    { genz: "câu_hỏi_cuộc_đời",         js: "query"                         }, // query params
    { genz: "tham_số_huyền_bí",         js: "params"                        }, // route params
    { genz: "đường_dẫn_con",            js: "route"                         }, // route
    { genz: "phọt_json",                js: "JSON.stringify"                }, // JSON.stringify
    { genz: "nuốt_json",                js: "JSON.parse"                    }, // JSON.parse
    { genz: "phọt_json_ngắn",           js: "json"                          }, // .json()
    { genz: "ghi_file",                 js: "sendFile"                      }, // sendFile()
    { genz: "hẹn_hò",                   js: "connect"                       }, // connect

    // ╔══════════════════════════════════════════════════════╗
    // ║  📦  ARRAY METHODS - Thần Kinh Mảng                  ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "biến_hình",                js: "map"                           }, // .map()
    { genz: "thằng_phèn",               js: "filter"                        }, // .filter()
    { genz: "gom_xác",                  js: "reduce"                        }, // .reduce()
    { genz: "xếp_hàng",                 js: "push"                          }, // .push()
    { genz: "đuổi_về",                  js: "pop"                           }, // .pop()
    { genz: "ném_vào_đầu",              js: "unshift"                       }, // .unshift()
    { genz: "bỏ_đầu",                   js: "shift"                         }, // .shift()
    { genz: "đảo_ngói",                 js: "reverse"                       }, // .reverse()
    { genz: "chia_gia_tài",             js: "slice"                         }, // .slice()
    { genz: "mổ_bụng",                  js: "splice"                        }, // .splice()
    { genz: "crush",                    js: "find"                          }, // .find()
    { genz: "tìm_vị_trí",               js: "findIndex"                     }, // .findIndex()
    { genz: "kiểm_tra_dân",             js: "some"                          }, // .some()
    { genz: "tất_cả_ngoan",             js: "every"                         }, // .every()
    { genz: "ghép_duyên",               js: "concat"                        }, // .concat()
    { genz: "dẹp_phẳng",                js: "flat"                          }, // .flat()
    { genz: "biến_hình_dẹp_phẳng",      js: "flatMap"                       }, // .flatMap()
    { genz: "sắp_xếp_thứ_bậc",          js: "sort"                          }, // .sort()
    { genz: "đếm_đầu_người",             js: "length"                        }, // .length
    { genz: "phủ_đầy",                  js: "fill"                          }, // .fill()
    { genz: "tạo_dân",                  js: "Array.from"                    }, // Array.from()
    { genz: "có_không",                 js: "includes"                      }, // .includes()
    { genz: "tụ_họp",                   js: "join"                          }, // .join()
    { genz: "tách_thành_mảnh",          js: "split"                         }, // .split()
    { genz: "nhìn_thấu",                js: "indexOf"                       }, // .indexOf()
    { genz: "vạch_lá_tìm_sâu",          js: "lastIndexOf"                   }, // .lastIndexOf()
    { genz: "dẹp_trùng",                js: "Set"                           }, // Set()
    { genz: "danh_sách_đen",             js: "array"                         }, // array type

    // ╔══════════════════════════════════════════════════════╗
    // ║  📝  STRING METHODS - Làm Việc Với Chữ               ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "viết_hoa_cho_máu",          js: "toUpperCase"                   }, // toUpperCase()
    { genz: "thì_thầm",                  js: "toLowerCase"                   }, // toLowerCase()
    { genz: "cắt_đuôi",                  js: "trim"                          }, // trim()
    { genz: "tẩy_não",                   js: "replace"                       }, // replace()
    { genz: "tẩy_não_toàn_bộ",           js: "replaceAll"                    }, // replaceAll()
    { genz: "có_phải_không",             js: "startsWith"                    }, // startsWith()
    { genz: "kết_bằng",                  js: "endsWith"                      }, // endsWith()
    { genz: "đệm_trái",                  js: "padStart"                      }, // padStart()
    { genz: "đệm_phải",                  js: "padEnd"                        }, // padEnd()
    { genz: "nhân_bản_chữ",             js: "repeat"                        }, // repeat()
    { genz: "khớp_mẫu",                  js: "match"                         }, // match()
    { genz: "kiểm_tra_mẫu",              js: "test"                          }, // regex.test()
    { genz: "đổi_thành_số",              js: "parseInt"                      }, // parseInt()
    { genz: "đổi_thành_số_thực",         js: "parseFloat"                    }, // parseFloat()
    { genz: "đổi_thành_chữ",             js: "toString"                      }, // toString()
    { genz: "văn_vẻ",                    js: "string"                        }, // string type
    { genz: "regex_bắt_người",           js: "RegExp"                        }, // RegExp
    { genz: "mẫu_chữ",                   js: "template_literal"              }, // template literal
    { genz: "viết_sớ",                   js: "textContent"                   }, // textContent
    { genz: "đắp_thêm_thịt",             js: "innerHTML"                     }, // innerHTML

    // ╔══════════════════════════════════════════════════════╗
    // ║  🔢  SỐ & MATH                                       ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "nhà_cái_đến_từ_châu_âu",    js: "Math"                          }, // Math
    { genz: "số_ngẫu_nhiên",             js: "Math.random"                   }, // Math.random()
    { genz: "làm_tròn_đời_em",           js: "Math.round"                    }, // Math.round()
    { genz: "ngóc_đầu_lên",              js: "Math.ceil"                     }, // Math.ceil()
    { genz: "xuống_hố",                  js: "Math.floor"                    }, // Math.floor()
    { genz: "tuyệt_đối_mãi_yêu",         js: "Math.abs"                      }, // Math.abs()
    { genz: "số_lớn_nhất",               js: "Math.max"                      }, // Math.max()
    { genz: "số_nhỏ_nhất",               js: "Math.min"                      }, // Math.min()
    { genz: "lũy_thừa",                  js: "Math.pow"                      }, // Math.pow()
    { genz: "căn_bậc_hai",               js: "Math.sqrt"                     }, // Math.sqrt()
    { genz: "số_má",                      js: "number"                        }, // number type
    { genz: "số_khủng",                   js: "BigInt"                        }, // BigInt

    // ╔══════════════════════════════════════════════════════╗
    // ║  ⏰  THỜI GIAN                                       ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "hẹn_giờ_nổ",               js: "setTimeout"                    }, // setTimeout
    { genz: "nhắc_lại_cho_nhớ",          js: "setInterval"                   }, // setInterval
    { genz: "hồn_bay_phách_lạc",         js: "clearTimeout"                  }, // clearTimeout
    { genz: "hủy_nhắc",                  js: "clearInterval"                 }, // clearInterval
    { genz: "giờ_cao_điểm",              js: "timestamp"                     }, // timestamp
    { genz: "ngược_dòng_thời_gian",       js: "Date"                          }, // Date
    { genz: "ngủ_nướng",                 js: "sleep"                         }, // sleep (custom)
    { genz: "giờ_hiện_tại",              js: "Date.now()"                    }, // Date.now()

    // ╔══════════════════════════════════════════════════════╗
    // ║  🎯  EVENTS - Sự Kiện Cuộc Đời                      ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "hóng_biến",                 js: "addEventListener"              }, // addEventListener
    { genz: "ngắt_kết_nối_tạm_thời",     js: "removeEventListener"           }, // removeEventListener
    { genz: "ngăn_chặn_thanh_nga",        js: "preventDefault"                }, // preventDefault
    { genz: "đừng_lan_truyền",           js: "stopPropagation"               }, // stopPropagation
    { genz: "kẻ_hủy_diệt",              js: "abort"                         }, // abort
    { genz: "nhắn_tin",                  js: "emit"                          }, // emit
    { genz: "seen",                      js: "on"                            }, // on (socket/event)
    { genz: "quan_tâm",                  js: "watch"                         }, // watch

    // ╔══════════════════════════════════════════════════════╗
    // ║  💬  CONSOLE - Chửi Code Chuyên Nghiệp               ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "vạch_mặt",                  js: "console.debug"                 }, // console.debug
    { genz: "la_làng_cảnh_báo",          js: "console.warn"                  }, // console.warn
    { genz: "khóc_tiếng_máng",           js: "console.error"                 }, // console.error
    { genz: "xếp_hàng_chờ_chửi",         js: "console.table"                 }, // console.table
    { genz: "đếm_ngày_xa_em",            js: "console.count"                 }, // console.count
    { genz: "bấm_giờ_code",              js: "console.time"                  }, // console.time
    { genz: "nhóm_lại",                  js: "console.group"                 }, // console.group
    { genz: "dọn_màn_hình",              js: "console.clear"                 }, // console.clear
    { genz: "báo_động_đỏ",               js: "critical"                      }, // critical
    { genz: "nhắc_nhở_nhẹ",              js: "info"                          }, // info

    // ╔══════════════════════════════════════════════════════╗
    // ║  🏷️  PROMISE - Lời Hứa                               ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "thề_non_hẹn_biển",          js: "Promise"                       }, // Promise
    { genz: "đang_vận_nội_công",          js: "pending"                       }, // pending
    { genz: "đắc_đạo",                   js: "fulfilled"                     }, // fulfilled
    { genz: "tẩu_hỏa_nhập_ma",           js: "rejected"                      }, // rejected
    { genz: "khi_đắc_đạo",               js: "then"                          }, // .then()
    { genz: "khi_tẩu_hỏa",               js: "catch"                         }, // .catch()
    { genz: "đợi_tất_cả",                js: "Promise.all"                   }, // Promise.all
    { genz: "ai_xong_trước",              js: "Promise.race"                  }, // Promise.race
    { genz: "đợi_tất_cả_kể_cả_fail",     js: "Promise.allSettled"            }, // Promise.allSettled
    { genz: "giải_quyết",                js: "resolve"                       }, // resolve
    { genz: "ngu_thì_chết",              js: "reject"                        }, // reject
    { genz: "gọi_hồn",                   js: "callback"                      }, // callback

    // ╔══════════════════════════════════════════════════════╗
    // ║  ⚛️  REACT HOOKS                                     ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "nội_tâm",                   js: "state"                         }, // state
    { genz: "thay_lòng_đổi_dạ",          js: "setState"                      }, // setState
    { genz: "nghiện_ngập",               js: "useEffect"                     }, // useEffect
    { genz: "nhớ_nhung",                 js: "useMemo"                       }, // useMemo
    { genz: "gọi_hồn_hooks",             js: "useCallback"                   }, // useCallback
    { genz: "móc_lốp",                   js: "hooks"                         }, // hooks
    { genz: "vẻ_bề_ngoài",               js: "props"                         }, // props
    { genz: "mặt_nạ",                    js: "component"                     }, // component
    { genz: "hồn_trương_ba",             js: "virtual_dom"                   }, // virtual dom
    { genz: "tô_son_trát_phấn",          js: "style"                         }, // style prop
    { genz: "lên_đồ",                    js: "render"                        }, // render
    { genz: "ảo_thật_đấy",               js: "ref"                           }, // ref
    { genz: "truyền_đạo",                js: "context"                       }, // context
    { genz: "cắm_sạc",                   js: "mount"                         }, // mount
    { genz: "rút_sạc",                   js: "unmount"                       }, // unmount
    { genz: "mảnh_vỡ",                   js: "Fragment"                      }, // Fragment
    { genz: "cung_cấp",                  js: "Provider"                      }, // Provider
    { genz: "tiêu_thụ",                  js: "Consumer"                      }, // Consumer
    { genz: "không_đổi_mới",             js: "React.memo"                    }, // React.memo
    { genz: "tải_lười",                  js: "lazy"                          }, // lazy loading
    { genz: "tạm_thời_hiện",             js: "Suspense"                      }, // Suspense
    { genz: "hành_động",                 js: "action"                        }, // Redux action
    { genz: "giảm_thiểu",                js: "reducer"                       }, // reducer
    { genz: "cửa_hàng",                  js: "store"                         }, // store

    // ╔══════════════════════════════════════════════════════╗
    // ║  🎭  OOP - Hướng Đối Tượng                           ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "gia_phả",                   js: "prototype"                     }, // prototype
    { genz: "cha_truyền_con_nối",        js: "inheritance"                   }, // inheritance
    { genz: "mẹ_thiên_nhiên",            js: "super"                         }, // super
    { genz: "chính_thất",                js: "this"                          }, // this
    { genz: "tiểu_tam",                  js: "proxy"                         }, // Proxy
    { genz: "đúc_khuôn",                 js: "constructor"                   }, // constructor
    { genz: "bản_sao_lỗi",              js: "instance"                      }, // instance
    { genz: "che_đậy",                   js: "private"                       }, // private
    { genz: "phơi_bày",                  js: "public"                        }, // public
    { genz: "khởi_động",                 js: "static"                        }, // static
    { genz: "xăm_trổ",                   js: "decorator"                     }, // decorator
    { genz: "đóng_lồng",                 js: "closure"                       }, // closure
    { genz: "nâng_lên",                  js: "hoisting"                      }, // hoisting
    { genz: "đối_tượng_khả_nghi",        js: "object"                        }, // object
    { genz: "không_thay_đổi",            js: "immutable"                     }, // immutable
    { genz: "hàm_bậc_cao",               js: "higher_order_function"         }, // HOF
    { genz: "bản_đồ_đặc_biệt",          js: "Map"                           }, // Map
    { genz: "tập_hợp_độc_đáo",           js: "Set"                           }, // Set
    { genz: "ký_tự_đặc_biệt",            js: "Symbol"                        }, // Symbol
    { genz: "ký_hiệu_riêng",             js: "Symbol"                        }, // Symbol alias

    // ╔══════════════════════════════════════════════════════╗
    // ║  🌍  DOM                                              ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "đại_ca",                    js: "root"                          }, // root / document
    { genz: "thu_nạp_đệ_tử",            js: "appendChild"                   }, // appendChild
    { genz: "xóa_tên_khỏi_sổ_bụi",      js: "removeChild"                   }, // removeChild
    { genz: "tạo_phần_tử",               js: "createElement"                 }, // createElement
    { genz: "tìm_theo_id",               js: "getElementById"                }, // getElementById
    { genz: "tìm_kiếm_thông_minh",       js: "querySelector"                 }, // querySelector
    { genz: "tìm_tất_cả",                js: "querySelectorAll"               }, // querySelectorAll
    { genz: "thêm_lớp",                  js: "classList.add"                 }, // classList.add
    { genz: "bỏ_lớp",                    js: "classList.remove"              }, // classList.remove
    { genz: "đổi_lớp",                   js: "classList.toggle"              }, // classList.toggle
    { genz: "phán_quyết",                js: "eval"                          }, // eval (nguy hiểm)
    { genz: "đánh_tiếng",                js: "alert"                         }, // alert
    { genz: "giải_tán",                  js: "destroy"                       }, // destroy
    { genz: "ảo_giác",                   js: "placeholder"                   }, // placeholder

    // ╔══════════════════════════════════════════════════════╗
    // ║  💾  FILE SYSTEM & NODE.JS                           ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "đại_bản_doanh",             js: "path"                          }, // path module
    { genz: "mò_đường",                  js: "resolve"                       }, // path.resolve
    { genz: "đào_mộ",                    js: "fs"                            }, // fs module
    { genz: "đọc_lệnh",                  js: "readFileSync"                  }, // readFileSync
    { genz: "ghi_sớ",                    js: "writeFileSync"                 }, // writeFileSync
    { genz: "xem_trộm",                  js: "readdir"                       }, // readdir
    { genz: "đổi_danh_tánh",             js: "rename"                        }, // rename
    { genz: "vùng_đất_mới",              js: "mkdir"                         }, // mkdir
    { genz: "đọc_bất_đồng",              js: "readFile"                      }, // readFile async
    { genz: "ghi_bất_đồng",              js: "writeFile"                     }, // writeFile async

    // ╔══════════════════════════════════════════════════════╗
    // ║  🐳  DEVOPS & DOCKER                                 ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "đóng_thùng",                js: "dockerize"                     }, // dockerize
    { genz: "container_rác",             js: "container"                     }, // container
    { genz: "khởi_chạy",                 js: "start"                         }, // start
    { genz: "bay_màu",                   js: "remove"                        }, // remove
    { genz: "xây_tượng",                 js: "build"                         }, // build
    { genz: "thông_số",                  js: "env"                           }, // env
    { genz: "địa_bàn",                   js: "host"                          }, // host
    { genz: "cổng_trục",                 js: "port"                          }, // port
    { genz: "cúng_cụ",                   js: "deploy"                        }, // deploy
    { genz: "chạy_thử_nghiệm",           js: "staging"                       }, // staging
    { genz: "thật_thật",                 js: "production"                    }, // production
    { genz: "bếp_nhà",                   js: "localhost"                     }, // localhost
    { genz: "cân_tải",                   js: "load_balancer"                 }, // load balancer
    { genz: "nhân_giống",                js: "scale"                         }, // scale
    { genz: "đường_ống",                 js: "pipeline"                      }, // pipeline
    { genz: "bản_thiết_kế",              js: "Dockerfile"                    }, // Dockerfile
    { genz: "dàn_trận",                  js: "docker-compose"                }, // docker-compose
    { genz: "ảo_hóa",                    js: "kubernetes"                    }, // k8s
    { genz: "hàng_đợi",                  js: "queue"                         }, // queue
    { genz: "nhớ_đệm",                   js: "cache"                         }, // cache
    { genz: "xả_nhớ_đệm",               js: "flush_cache"                   }, // flush cache
    { genz: "cảnh_báo_cháy",             js: "alert"                         }, // alert monitor
    { genz: "sao_lưu",                   js: "backup"                        }, // backup
    { genz: "phục_hồi",                  js: "restore"                       }, // restore

    // ╔══════════════════════════════════════════════════════╗
    // ║  📂  GIT VERSION CONTROL                             ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "nhập_ngũ",                  js: "commit"                        }, // commit
    { genz: "đẩy_ra_đảo",               js: "push"                          }, // push
    { genz: "về_với_đất_mẹ",            js: "pull"                          }, // pull
    { genz: "chia_bè_phái",              js: "branch"                        }, // branch
    { genz: "hòa_giải",                  js: "merge"                         }, // merge
    { genz: "chiến_tranh_lạnh",          js: "conflict"                      }, // conflict
    { genz: "nhân_bản_vô_tính",          js: "clone"                         }, // clone
    { genz: "lật_kèo",                   js: "revert"                        }, // revert
    { genz: "vứt_xó",                    js: "stash"                         }, // stash
    { genz: "nhặt_anh_đào",              js: "cherry-pick"                   }, // cherry-pick
    { genz: "đặt_mốc",                   js: "tag"                           }, // tag
    { genz: "phân_tích_tội_lỗi",         js: "git_blame"                     }, // git blame
    { genz: "làm_lại",                   js: "rebase"                        }, // rebase
    { genz: "ăn_mày_quá_khứ",            js: "version_control"               }, // version control

    // ╔══════════════════════════════════════════════════════╗
    // ║  🧪  TESTING                                         ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "chuột_bạch",                js: "test_case"                     }, // test case
    { genz: "diễn_kịch",                 js: "mock_data"                     }, // mock data
    { genz: "vạch_trần",                 js: "debug"                         }, // debug
    { genz: "đổ_thừa",                   js: "trace"                         }, // trace
    { genz: "thanh_nga_lòng_tiếng",      js: "stub"                          }, // stub
    { genz: "nội_gián",                  js: "spy"                           }, // spy
    { genz: "kỳ_vọng",                   js: "expect"                        }, // expect
    { genz: "mô_tả",                     js: "describe"                      }, // describe
    { genz: "thì",                       js: "it"                            }, // it()
    { genz: "trước_khi_tất_cả",          js: "beforeAll"                     }, // beforeAll
    { genz: "sau_mỗi_lần",               js: "afterEach"                     }, // afterEach
    { genz: "bỏ_qua",                    js: "skip"                          }, // skip
    { genz: "chỉ_mình_mày",              js: "only"                          }, // only
    { genz: "phủ_sóng",                  js: "code_coverage"                 }, // coverage
    { genz: "test_căng_thẳng",           js: "stress_test"                   }, // stress test
    { genz: "ngã_boss",                  js: "pass_all_tests"                }, // pass all tests

    // ╔══════════════════════════════════════════════════════╗
    // ║  🔐  BẢO MẬT                                         ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "mật_mã_da_vinci",           js: "password"                      }, // password
    { genz: "ăn_trộm",                   js: "hack"                          }, // hack
    { genz: "buff_bẩn",                  js: "exploit"                       }, // exploit
    { genz: "băm_nhuyễn",                js: "hash"                          }, // hash
    { genz: "muối_ăn",                   js: "salt"                          }, // salt
    { genz: "mã_hóa_hai_chiều",          js: "encryption"                    }, // encryption
    { genz: "vượt_rào",                  js: "bypass"                        }, // bypass
    { genz: "chìa_khóa_vỉa_hè",         js: "public_key"                    }, // public key
    { genz: "bí_mật_két_sắt",            js: "private_key"                   }, // private key
    { genz: "tiêm_thuốc_độc",            js: "SQL_injection"                 }, // SQL injection
    { genz: "cấm_cửa",                   js: "deny"                          }, // deny
    { genz: "thông_thả",                 js: "allow"                         }, // allow
    { genz: "kiểm_tra_nhân_phẩm",        js: "validate"                      }, // validate
    { genz: "cờ_đỏ",                     js: "invalid"                       }, // invalid
    { genz: "cờ_xanh",                   js: "valid"                         }, // valid
    { genz: "giới_hạn_tần_suất",         js: "rate_limiting"                 }, // rate limiting

    // ╔══════════════════════════════════════════════════════╗
    // ║  🤖  AI & ML TERMS                                   ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "não_to",                    js: "LLM"                           }, // LLM
    { genz: "gợi_ý_thần_thánh",          js: "prompt"                        }, // prompt
    { genz: "kỹ_năng_hỏi_ai",            js: "prompt_engineering"            }, // prompt engineering
    { genz: "tăng_cường_tìm_kiếm",       js: "RAG"                           }, // RAG
    { genz: "tinh_chỉnh",                js: "fine_tuning"                   }, // fine tuning
    { genz: "suy_luận",                  js: "inference"                     }, // inference
    { genz: "token_tiêu_dùng",           js: "token_usage"                   }, // token usage
    { genz: "đặc_vụ_ai",                 js: "AI_agent"                      }, // AI agent
    { genz: "ảo_giác_ai",                js: "hallucination"                 }, // hallucination
    { genz: "nhúng_vào_không_gian",      js: "embedding"                     }, // embedding
    { genz: "kho_vectơ",                 js: "vector_store"                  }, // vector store
    { genz: "nhiệt_độ_sáng_tạo",         js: "temperature"                   }, // temperature
    { genz: "chặn_ác",                   js: "guardrails"                    }, // guardrails

    // ╔══════════════════════════════════════════════════════╗
    // ║  🔧  TOOLS & PACKAGES                                ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "đầu_bếp",                   js: "webpack"                       }, // webpack
    { genz: "đầu_bếp_nhanh",             js: "Vite"                          }, // Vite
    { genz: "gia_vị",                    js: "plugin"                        }, // plugin
    { genz: "nước_lèo",                  js: "boilerplate"                   }, // boilerplate
    { genz: "tráng_miệng",               js: "minify"                        }, // minify
    { genz: "rửa_bát",                   js: "clean"                         }, // clean
    { genz: "chải_chuốt",                js: "lint"                          }, // lint
    { genz: "định_dạng_đẹp",             js: "format"                        }, // format
    { genz: "đóng_họ",                   js: "install"                       }, // install
    { genz: "rút_vốn",                   js: "uninstall"                     }, // uninstall
    { genz: "lên_đời",                   js: "update"                        }, // update
    { genz: "hàng_tồn_kho",              js: "node_modules"                  }, // node_modules
    { genz: "giấy_ghi_nợ",              js: "package.json"                  }, // package.json
    { genz: "chốt_sổ",                   js: "lock"                          }, // lock file
    { genz: "bú_fame",                   js: "dependency"                    }, // dependency
    { genz: "vay_nặng_lãi",              js: "external_library"              }, // external lib
    { genz: "phù_hộ",                    js: "support"                       }, // support
    { genz: "yêu_cầu_kéo",               js: "pull_request"                  }, // pull request
    { genz: "kiểm_duyệt_code",           js: "code_review"                   }, // code review

    // ╔══════════════════════════════════════════════════════╗
    // ║  💀  DRAMA - Thuật Ngữ Cuộc Đời Dev                  ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "code_như_hạch",             js: "refactor"                      }, // refactor
    { genz: "thằng_ngáo",                js: "bug"                           }, // bug
    { genz: "đéo_hiểu_kiểu_gì",          js: "bug"                           }, // bug alias
    { genz: "đống_shjt",                 js: "legacy_code"                   }, // legacy code
    { genz: "múa_rìu",                   js: "optimize"                      }, // optimize
    { genz: "ảo_ma",                     js: "magic_number"                  }, // magic number
    { genz: "thông_não",                 js: "documentation"                 }, // docs
    { genz: "nổ_vũ_trụ",                 js: "crash"                         }, // crash
    { genz: "ăn_hại_đái_khai",           js: "dead_code"                     }, // dead code
    { genz: "nợ_kỹ_thuật",               js: "technical_debt"                }, // tech debt
    { genz: "code_hỏa_ngục",             js: "callback_hell"                 }, // callback hell
    { genz: "type_vô_địa_ngục",          js: "type_coercion"                 }, // type coercion
    { genz: "xác_chết_di_động",          js: "zombie_process"                }, // zombie process
    { genz: "đầu_thừa_đuôi_thẹo",        js: "deprecated"                    }, // deprecated
    { genz: "hàng_nhái",                 js: "anti_pattern"                  }, // anti-pattern
    { genz: "ngốn_như_hạm",              js: "memory_leak"                   }, // memory leak
    { genz: "thở_oxy",                   js: "overload"                      }, // overload
    { genz: "đứng_hình_mất_5s",          js: "freeze"                        }, // freeze
    { genz: "chạy_bằng_niềm_tin",        js: "unoptimized"                   }, // unoptimized
    { genz: "bay_ghế",                   js: "shutdown"                      }, // shutdown
    { genz: "bản_kiểm_điểm",             js: "log_file"                      }, // log file
    { genz: "đuổi_thẳng_cổ",             js: "kill"                          }, // kill process
    { genz: "vắt_kiệt_sức_lao_động",     js: "max_listeners"                 }, // max listeners
    { genz: "đập_đi_xây_lại",            js: "restart"                       }, // restart
    { genz: "hảo_hán",                   js: "senior_dev"                    }, // senior dev
    { genz: "tân_binh_tồ",               js: "junior_dev"                    }, // junior dev
    { genz: "tích_đức",                  js: "optimization"                  }, // optimization
    { genz: "rác_rưởi",                  js: "garbage_collection"            }, // GC
    { genz: "quẻ_bói",                   js: "result"                        }, // result
    { genz: "hồi_máu",                   js: "refresh"                       }, // refresh
    { genz: "gánh_team",                 js: "main"                          }, // main
    { genz: "farm_quái",                 js: "loop"                          }, // loop
    { genz: "phá_đảo",                   js: "complete"                      }, // complete
    { genz: "tàng_hình",                 js: "opacity: 0"                    }, // transparent
    { genz: "mất_hút",                   js: "hidden"                        }, // hidden
    { genz: "hiện_hình",                 js: "visible"                       }, // visible
    { genz: "đấm_nhau",                  js: "conflict_resolution"           }, // conflict resolution
    { genz: "tình_anh_em",               js: "global"                        }, // global
    { genz: "người_trong_giang_hồ",      js: "local"                         }, // local
    { genz: "truyền_thái_y",             js: "inject"                        }, // inject
    { genz: "thuốc_hồi_trinh",           js: "reset"                         }, // reset
    { genz: "thao_túng",                 js: "manipulate"                    }, // manipulate
    { genz: "đầu_thai",                  js: "reload"                        }, // reload
    { genz: "đường_đi_file",             js: "namespace"                     }, // namespace
    { genz: "vô_vọng",                   js: "infinite_loop"                 }, // infinite loop
    { genz: "cái_đéo_gì_đây",            js: "unknown"                       }, // unknown
    { genz: "tốc_biến",                  js: "redirect"                      }, // redirect
    { genz: "trùng_bước",                js: "duplicate"                     }, // duplicate
    { genz: "kết_nối_âm_dương",          js: "join"                          }, // join
    { genz: "kho_hàng",                  js: "database"                      }, // database
    { genz: "bản_ghi_lô_đề",             js: "record"                        }, // record
    { genz: "chìa_khóa_vạn_năng",        js: "primary_key"                   }, // primary key
    { genz: "di_dân",                    js: "migration"                     }, // migration
    { genz: "gieo_hạt",                  js: "seed"                          }, // seed
    { genz: "giao_dịch_tình_cảm",        js: "transaction"                   }, // transaction
    { genz: "cuộn_lại",                  js: "rollback"                      }, // rollback
    { genz: "mô_hình",                   js: "schema"                        }, // schema
    { genz: "vuốt_mặt_nể_mũi",          js: "swipe"                         }, // swipe
    { genz: "chạm_vào_nỗi_đau",          js: "tap"                           }, // tap
    { genz: "zoom_vào_đời_em",           js: "pinch"                         }, // pinch
    { genz: "lắc_não",                   js: "shake"                         }, // shake
    { genz: "nằm_ngang",                 js: "landscape"                     }, // landscape
    { genz: "đứng_bến_xe",               js: "portrait"                      }, // portrait
    { genz: "làm_màu",                   js: "ui_design"                     }, // UI design
    { genz: "múa_quạt",                  js: "animation"                     }, // animation
];
