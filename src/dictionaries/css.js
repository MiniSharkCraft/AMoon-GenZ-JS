/**
 * 💅 TỪ ĐIỂN CSS - AMoon GenZ Edition
 * Làm đẹp trang web mà không cần biết CSS thật sự
 * File .cagz = CSS As GenZ → CSS thật
 */
module.exports = [

    // ╔══════════════════════════════════════════════════════╗
    // ║  🎨  MÀU SẮC - Tô Vẽ Cuộc Đời                       ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "tông_nền",                 js: "background-color"              }, // Background color
    { genz: "ảnh_nền",                  js: "background-image"              }, // Background image
    { genz: "nền_toàn_diện",            js: "background"                    }, // Background shorthand
    { genz: "lặp_nền",                  js: "background-repeat"             }, // Background repeat
    { genz: "kích_nền",                 js: "background-size"               }, // Background size
    { genz: "nền_cover",                js: "background-size: cover"        }, // BG cover
    { genz: "nền_contain",              js: "background-size: contain"      }, // BG contain
    { genz: "vị_trí_nền",               js: "background-position"           }, // BG position
    { genz: "nền_cố_định",              js: "background-attachment: fixed"  }, // Fixed background
    { genz: "màu_chữ",                  js: "color"                         }, // Text color
    { genz: "đổi_màu_vận_mệnh",         js: "color"                         }, // Alias for color
    { genz: "trong_suốt",               js: "opacity"                       }, // Opacity
    { genz: "tàng_hình_hoàn_toàn",      js: "opacity: 0"                    }, // Invisible
    { genz: "hiện_rõ_ràng",             js: "opacity: 1"                    }, // Fully visible
    { genz: "màu_gradient",             js: "background: linear-gradient"   }, // Gradient
    { genz: "gradient_tròn",            js: "background: radial-gradient"   }, // Radial gradient

    // ╔══════════════════════════════════════════════════════╗
    // ║  🔤  CHỮ VIẾT - Typography Xịn                       ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "phông_bạt",                js: "font-family"                   }, // Font family
    { genz: "cỡ_chữ",                   js: "font-size"                     }, // Font size
    { genz: "độ_dày",                   js: "font-weight"                   }, // Font weight
    { genz: "độ_dày_nhân_phẩm",         js: "font-weight"                   }, // Alias
    { genz: "chữ_nghiêng",              js: "font-style: italic"            }, // Italic
    { genz: "chữ_thẳng",                js: "font-style: normal"            }, // Normal style
    { genz: "font_ngắn",                js: "font"                          }, // Font shorthand
    { genz: "căn_giữa",                 js: "text-align: center"            }, // Center align
    { genz: "căn_trái",                 js: "text-align: left"              }, // Left align
    { genz: "căn_phải",                 js: "text-align: right"             }, // Right align
    { genz: "căn_đều_hai_bên",          js: "text-align: justify"           }, // Justify
    { genz: "gạch_chân",                js: "text-decoration: underline"    }, // Underline
    { genz: "bỏ_gạch_chân",             js: "text-decoration: none"         }, // No underline
    { genz: "gạch_ngang_buồn",          js: "text-decoration: line-through" }, // Strikethrough
    { genz: "chữ_hoa_tất",              js: "text-transform: uppercase"     }, // Uppercase
    { genz: "chữ_thường_hết",           js: "text-transform: lowercase"     }, // Lowercase
    { genz: "viết_hoa_đầu",             js: "text-transform: capitalize"    }, // Capitalize
    { genz: "đổ_bóng_chữ",              js: "text-shadow"                   }, // Text shadow
    { genz: "khoảng_cách_chữ",          js: "letter-spacing"                }, // Letter spacing
    { genz: "khoảng_cách_từ",           js: "word-spacing"                  }, // Word spacing
    { genz: "chiều_cao_dòng",           js: "line-height"                   }, // Line height
    { genz: "thụt_đầu_dòng",            js: "text-indent"                   }, // Text indent
    { genz: "cắt_chữ_ba_chấm",          js: "text-overflow: ellipsis"       }, // Ellipsis
    { genz: "không_xuống_dòng",         js: "white-space: nowrap"           }, // No wrap
    { genz: "xuống_dòng_tự_do",         js: "white-space: pre-wrap"         }, // Pre-wrap
    { genz: "font_chữ_đẹp",             js: "-webkit-font-smoothing: antialiased" }, // Font smoothing

    // ╔══════════════════════════════════════════════════════╗
    // ║  📏  KÍCH THƯỚC - To Nhỏ Vuông Tròn                  ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "chiều_rộng",               js: "width"                         }, // Width
    { genz: "chiều_cao",                js: "height"                        }, // Height
    { genz: "rộng_nhất",                js: "max-width"                     }, // Max width
    { genz: "hẹp_nhất",                 js: "min-width"                     }, // Min width
    { genz: "cao_nhất",                 js: "max-height"                    }, // Max height
    { genz: "thấp_nhất",                js: "min-height"                    }, // Min height
    { genz: "chiều_rộng_full",          js: "width: 100%"                   }, // Full width
    { genz: "chiều_cao_full",           js: "height: 100%"                  }, // Full height
    { genz: "full_màn_hình",            js: "width: 100vw; height: 100vh"   }, // Full viewport
    { genz: "tự_điều_chỉnh",            js: "width: auto"                   }, // Auto width
    { genz: "fit_content",              js: "width: fit-content"            }, // Fit content

    // ╔══════════════════════════════════════════════════════╗
    // ║  📐  SPACING - Khoảng Cách Là Nghệ Thuật             ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "nội_tâm_thầm_kín",         js: "padding"                       }, // Padding all
    { genz: "khoảng_cách_trong",        js: "padding"                       }, // Alias
    { genz: "nội_tâm_trên",             js: "padding-top"                   }, // Padding top
    { genz: "nội_tâm_dưới",             js: "padding-bottom"                }, // Padding bottom
    { genz: "nội_tâm_trái",             js: "padding-left"                  }, // Padding left
    { genz: "nội_tâm_phải",             js: "padding-right"                 }, // Padding right
    { genz: "khoảng_cách_đôi_ta",       js: "margin"                        }, // Margin all
    { genz: "khoảng_cách_ngoài",        js: "margin"                        }, // Alias
    { genz: "margin_trên",              js: "margin-top"                    }, // Margin top
    { genz: "margin_dưới",              js: "margin-bottom"                 }, // Margin bottom
    { genz: "margin_trái",              js: "margin-left"                   }, // Margin left
    { genz: "margin_phải",              js: "margin-right"                  }, // Margin right
    { genz: "căn_giữa_hoàn_hảo",       js: "margin: 0 auto"                }, // Center block
    { genz: "xóa_margin",               js: "margin: 0"                     }, // No margin
    { genz: "xóa_padding",              js: "padding: 0"                    }, // No padding
    { genz: "khoảng_cách_ngắn",         js: "gap"                           }, // Gap in flex/grid
    { genz: "khoảng_cách_hàng",         js: "row-gap"                       }, // Row gap
    { genz: "khoảng_cách_cột",          js: "column-gap"                    }, // Column gap

    // ╔══════════════════════════════════════════════════════╗
    // ║  🖼️  BORDER & OUTLINE - Viền Vẽ Không Gian          ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "khung_hình_phạt",          js: "border"                        }, // Border shorthand
    { genz: "viền_màu",                 js: "border-color"                  }, // Border color
    { genz: "viền_dày",                 js: "border-width"                  }, // Border width
    { genz: "viền_kiểu",                js: "border-style"                  }, // Border style
    { genz: "viền_liền",                js: "border-style: solid"           }, // Solid border
    { genz: "viền_nét_đứt",             js: "border-style: dashed"          }, // Dashed
    { genz: "viền_chấm",                js: "border-style: dotted"          }, // Dotted
    { genz: "xóa_viền",                 js: "border: none"                  }, // No border
    { genz: "bo_góc",                   js: "border-radius"                 }, // Border radius
    { genz: "bo_tròn_hoàn_toàn",        js: "border-radius: 50%"            }, // Circle
    { genz: "bo_góc_nhẹ",               js: "border-radius: 8px"            }, // Soft corners
    { genz: "viền_ngoài",               js: "outline"                       }, // Outline
    { genz: "xóa_viền_ngoài",           js: "outline: none"                 }, // No outline

    // ╔══════════════════════════════════════════════════════╗
    // ║  🌑  SHADOW & EFFECTS - Hiệu Ứng Sang Xịn            ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "đổ_bóng_vào_đời",          js: "box-shadow"                    }, // Box shadow
    { genz: "bóng_nhẹ_nhàng",           js: "box-shadow: 0 2px 8px rgba(0,0,0,0.1)" }, // Subtle shadow
    { genz: "bóng_to_sang",             js: "box-shadow: 0 8px 32px rgba(0,0,0,0.2)" }, // Large shadow
    { genz: "không_bóng",               js: "box-shadow: none"              }, // No shadow
    { genz: "filter_mờ",                js: "filter: blur"                  }, // Blur filter
    { genz: "filter_sáng",              js: "filter: brightness"            }, // Brightness
    { genz: "filter_tương_phản",        js: "filter: contrast"              }, // Contrast
    { genz: "filter_đen_trắng",         js: "filter: grayscale(100%)"       }, // Grayscale
    { genz: "filter_xoay_màu",          js: "filter: hue-rotate"            }, // Hue rotate
    { genz: "mờ_nền",                   js: "backdrop-filter: blur"         }, // Backdrop blur (glassmorphism)

    // ╔══════════════════════════════════════════════════════╗
    // ║  📦  DISPLAY & VISIBILITY - Hiện Ẩn Linh Hoạt        ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "hiện_thị",                 js: "display"                       }, // Display property
    { genz: "khối_đặc",                 js: "display: block"                }, // Display block
    { genz: "nội_dòng",                 js: "display: inline"               }, // Inline
    { genz: "khối_nội_dòng",            js: "display: inline-block"         }, // Inline-block
    { genz: "linh_hoạt",                js: "display: flex"                 }, // Flexbox
    { genz: "lưới_đẹp",                 js: "display: grid"                 }, // Grid
    { genz: "biến_mất",                 js: "display: none"                 }, // Hidden (no space)
    { genz: "ẩn_mà_vẫn_chiếm_chỗ",     js: "visibility: hidden"            }, // Invisible but takes space
    { genz: "hiện_lại",                 js: "visibility: visible"           }, // Visible
    { genz: "bảng_biểu",                js: "display: table"                }, // Table display

    // ╔══════════════════════════════════════════════════════╗
    // ║  💪  FLEXBOX - Layout Chill Nhất Vũ Trụ              ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "hướng_hàng",               js: "flex-direction: row"           }, // Row direction
    { genz: "hướng_cột",                js: "flex-direction: column"        }, // Column direction
    { genz: "hướng_hàng_ngược",         js: "flex-direction: row-reverse"   }, // Row reverse
    { genz: "hướng_cột_ngược",          js: "flex-direction: column-reverse"}, // Column reverse
    { genz: "căn_chỉnh_chính",          js: "justify-content"               }, // Justify content
    { genz: "giữa_trục_chính",          js: "justify-content: center"       }, // Center on main axis
    { genz: "đầu_trục",                 js: "justify-content: flex-start"   }, // Flex start
    { genz: "cuối_trục",                js: "justify-content: flex-end"     }, // Flex end
    { genz: "cách_đều",                 js: "justify-content: space-between"}, // Space between
    { genz: "cách_đều_xung_quanh",      js: "justify-content: space-around" }, // Space around
    { genz: "cách_đều_hoàn_toàn",       js: "justify-content: space-evenly" }, // Space evenly
    { genz: "căn_chỉnh_phụ",            js: "align-items"                   }, // Align items
    { genz: "giữa_trục_phụ",            js: "align-items: center"           }, // Center cross axis
    { genz: "căn_đầu_phụ",              js: "align-items: flex-start"       }, // Cross start
    { genz: "căn_cuối_phụ",             js: "align-items: flex-end"         }, // Cross end
    { genz: "căn_đáy_chữ",             js: "align-items: baseline"         }, // Baseline
    { genz: "kéo_dài_hết",              js: "align-items: stretch"          }, // Stretch
    { genz: "giữa_hoàn_hảo",            js: "justify-content: center; align-items: center" }, // Perfect center
    { genz: "flex_co_giãn",             js: "flex"                          }, // Flex shorthand
    { genz: "chiếm_hết_chỗ",            js: "flex: 1"                       }, // Flex 1
    { genz: "không_co_giãn",            js: "flex: none"                    }, // No flex
    { genz: "xuống_hàng_khi_hẹp",       js: "flex-wrap: wrap"               }, // Wrap
    { genz: "không_xuống_hàng",         js: "flex-wrap: nowrap"             }, // No wrap
    { genz: "thứ_tự_flex",              js: "order"                         }, // Flex order
    { genz: "tự_căn_bản_thân",          js: "align-self"                    }, // Align self

    // ╔══════════════════════════════════════════════════════╗
    // ║  🏗️  GRID - Layout Cao Cấp Hơn                       ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "cột_grid",                 js: "grid-template-columns"         }, // Grid columns
    { genz: "hàng_grid",                js: "grid-template-rows"            }, // Grid rows
    { genz: "chia_đều_cột",             js: "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))" }, // Responsive grid
    { genz: "vùng_grid",                js: "grid-template-areas"           }, // Grid areas
    { genz: "bắt_đầu_cột",              js: "grid-column-start"             }, // Column start
    { genz: "kết_thúc_cột",             js: "grid-column-end"               }, // Column end
    { genz: "span_cột",                 js: "grid-column: span"             }, // Column span
    { genz: "span_hàng",                js: "grid-row: span"                }, // Row span

    // ╔══════════════════════════════════════════════════════╗
    // ║  📍  POSITION - Đặt Vị Trí Trong Đời                 ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "đặt_vị_trí",               js: "position"                      }, // Position property
    { genz: "theo_dòng_chảy",           js: "position: static"              }, // Static
    { genz: "tương_đối",                js: "position: relative"            }, // Relative
    { genz: "lơ_lửng",                  js: "position: absolute"            }, // Absolute
    { genz: "dính_màn_hình",            js: "position: fixed"               }, // Fixed
    { genz: "dính_khi_cuộn",            js: "position: sticky"              }, // Sticky
    { genz: "từ_trên",                  js: "top"                           }, // Top offset
    { genz: "từ_dưới",                  js: "bottom"                        }, // Bottom offset
    { genz: "từ_trái",                  js: "left"                          }, // Left offset
    { genz: "từ_phải",                  js: "right"                         }, // Right offset
    { genz: "che_khuất_ai",             js: "z-index"                       }, // Z-index
    { genz: "lên_hết_trên",             js: "z-index: 9999"                 }, // Highest z
    { genz: "xuống_đáy",                js: "z-index: -1"                   }, // Behind everything

    // ╔══════════════════════════════════════════════════════╗
    // ║  🎭  ANIMATION & TRANSITION - Chuyển Động Nghệ Thuật ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "bay_lắc",                  js: "animation"                     }, // Animation shorthand
    { genz: "tên_animation",            js: "animation-name"                }, // Animation name
    { genz: "thời_gian_chạy",           js: "animation-duration"            }, // Duration
    { genz: "lặp_mãi",                  js: "animation-iteration-count: infinite" }, // Infinite loop
    { genz: "chạy_một_lần",             js: "animation-iteration-count: 1"  }, // Once
    { genz: "đường_cong_animation",     js: "animation-timing-function"     }, // Timing function
    { genz: "trễ_animation",            js: "animation-delay"               }, // Delay
    { genz: "đảo_chiều_animation",      js: "animation-direction: alternate"}, // Alternate
    { genz: "đóng_băng_sau",            js: "animation-fill-mode: forwards" }, // Fill mode
    { genz: "chuyển_tiếp",              js: "transition"                    }, // Transition shorthand
    { genz: "tốc_độ_chuyển",            js: "transition-duration"           }, // Transition duration
    { genz: "loại_chuyển",              js: "transition-timing-function"     }, // Timing function
    { genz: "trễ_chuyển",               js: "transition-delay"              }, // Transition delay
    { genz: "thuộc_tính_chuyển",        js: "transition-property"           }, // What to transition
    { genz: "chuyển_tất",               js: "transition: all"               }, // Transition all
    { genz: "mượt_mà",                  js: "transition: all 0.3s ease"     }, // Smooth transition
    { genz: "ease_in_out",              js: "ease-in-out"                   }, // Easing
    { genz: "biến_đổi",                 js: "transform"                     }, // Transform
    { genz: "di_chuyển",                js: "transform: translate"          }, // Translate
    { genz: "xoay_vòng",                js: "transform: rotate"             }, // Rotate
    { genz: "phóng_to_thu_nhỏ",         js: "transform: scale"              }, // Scale
    { genz: "nghiêng_người",            js: "transform: skew"               }, // Skew
    { genz: "điểm_xoay",                js: "transform-origin"              }, // Transform origin
    { genz: "khai_báo_keyframe",        js: "@keyframes"                    }, // Keyframes
    { genz: "lúc_đầu",                  js: "from"                          }, // From keyframe
    { genz: "lúc_cuối",                 js: "to"                            }, // To keyframe

    // ╔══════════════════════════════════════════════════════╗
    // ║  🖱️  CURSOR & INTERACTION - Tương Tác Người Dùng     ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "chuột_tay",                js: "cursor: pointer"               }, // Pointer cursor
    { genz: "chuột_thường",             js: "cursor: default"               }, // Default cursor
    { genz: "chuột_di_chuyển",          js: "cursor: move"                  }, // Move cursor
    { genz: "chuột_không_được",         js: "cursor: not-allowed"           }, // Not allowed
    { genz: "chuột_đợi",                js: "cursor: wait"                  }, // Loading cursor
    { genz: "chuột_text",               js: "cursor: text"                  }, // Text cursor
    { genz: "không_chọn_được",          js: "user-select: none"             }, // No select
    { genz: "chọn_tất_được",            js: "user-select: all"              }, // Select all
    { genz: "không_click_được",         js: "pointer-events: none"          }, // No pointer events
    { genz: "click_bình_thường",        js: "pointer-events: auto"          }, // Auto pointer events
    { genz: "scroll_mượt",              js: "scroll-behavior: smooth"       }, // Smooth scroll
    { genz: "overflow_ẩn",              js: "overflow: hidden"              }, // Hide overflow
    { genz: "overflow_cuộn",            js: "overflow: auto"                }, // Scrollable
    { genz: "overflow_cuộn_dọc",        js: "overflow-y: auto"              }, // Vertical scroll
    { genz: "overflow_cuộn_ngang",      js: "overflow-x: auto"              }, // Horizontal scroll
    { genz: "overflow_hiện",            js: "overflow: visible"             }, // Visible overflow
    { genz: "cắt_nội_dung",             js: "overflow: hidden; text-overflow: ellipsis; white-space: nowrap" }, // Truncate text

    // ╔══════════════════════════════════════════════════════╗
    // ║  📱  RESPONSIVE - Đáp Ứng Mọi Màn Hình              ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "khi_di_động",              js: "@media (max-width: 768px)"     }, // Mobile breakpoint
    { genz: "khi_tablet",               js: "@media (min-width: 768px) and (max-width: 1024px)" }, // Tablet
    { genz: "khi_desktop",              js: "@media (min-width: 1024px)"    }, // Desktop
    { genz: "khi_màn_lớn",              js: "@media (min-width: 1440px)"    }, // Large screen
    { genz: "khi_tối",                  js: "@media (prefers-color-scheme: dark)"  }, // Dark mode
    { genz: "khi_sáng",                 js: "@media (prefers-color-scheme: light)" }, // Light mode
    { genz: "khi_print",                js: "@media print"                  }, // Print media
    { genz: "khi_nằm_ngang",            js: "@media (orientation: landscape)"}, // Landscape

    // ╔══════════════════════════════════════════════════════╗
    // ║  🎯  PSEUDO-CLASSES & PSEUDO-ELEMENTS - Ma Thuật CSS ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "khi_rê_chuột",             js: ":hover"                        }, // Hover state
    { genz: "khi_nhấn",                 js: ":active"                       }, // Active state
    { genz: "khi_focus",                js: ":focus"                        }, // Focus state
    { genz: "khi_focus_nhìn",           js: ":focus-visible"                }, // Focus visible
    { genz: "đứa_đầu",                  js: ":first-child"                  }, // First child
    { genz: "đứa_cuối",                 js: ":last-child"                   }, // Last child
    { genz: "đứa_thứ_n",                js: ":nth-child"                    }, // Nth child
    { genz: "đứa_chẵn",                 js: ":nth-child(even)"              }, // Even children
    { genz: "đứa_lẻ",                   js: ":nth-child(odd)"               }, // Odd children
    { genz: "con_một",                  js: ":only-child"                   }, // Only child
    { genz: "chưa_thăm",                js: ":link"                         }, // Unvisited link
    { genz: "đã_thăm",                  js: ":visited"                      }, // Visited link
    { genz: "bị_tắt",                   js: ":disabled"                     }, // Disabled state
    { genz: "đang_check",               js: ":checked"                      }, // Checked state
    { genz: "trống_rỗng",               js: ":empty"                        }, // Empty element
    { genz: "không_phải",               js: ":not"                          }, // Not selector
    { genz: "trước_nội_dung",           js: "::before"                      }, // Before pseudo
    { genz: "sau_nội_dung",             js: "::after"                       }, // After pseudo
    { genz: "dấu_trang_đánh",           js: "::selection"                   }, // Text selection
    { genz: "ký_tự_đầu",                js: "::first-letter"                }, // First letter
    { genz: "dòng_đầu",                 js: "::first-line"                  }, // First line
    { genz: "placeholder_style",        js: "::placeholder"                 }, // Placeholder style
    { genz: "scroll_thumb",             js: "::-webkit-scrollbar-thumb"     }, // Scrollbar thumb
    { genz: "scroll_track",             js: "::-webkit-scrollbar-track"     }, // Scrollbar track

    // ╔══════════════════════════════════════════════════════╗
    // ║  🧮  CSS VARIABLES & FUNCTIONS - Lập Trình Trong CSS ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "biến_css_khai",            js: ":root"                         }, // Root for variables
    { genz: "lấy_biến",                 js: "var"                           }, // var() function
    { genz: "tính_toán",                js: "calc"                          }, // calc()
    { genz: "giá_trị_kẹp",              js: "clamp"                         }, // clamp()
    { genz: "nhỏ_hơn_lấy",             js: "min"                           }, // min()
    { genz: "lớn_hơn_lấy",             js: "max"                           }, // max()
    { genz: "import_css",               js: "@import"                       }, // @import
    { genz: "khai_báo_font",            js: "@font-face"                    }, // @font-face

    // ╔══════════════════════════════════════════════════════╗
    // ║  🌈  MÀU PHỔ BIẾN - Không Cần Nhớ Hex               ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "đen",                      js: "black"                         }, // Black
    { genz: "trắng",                    js: "white"                         }, // White
    { genz: "xám",                      js: "gray"                          }, // Gray
    { genz: "xám_nhạt",                 js: "#f0f0f0"                       }, // Light gray
    { genz: "đỏ",                       js: "red"                           }, // Red
    { genz: "xanh_lá",                  js: "green"                         }, // Green
    { genz: "xanh_dương",               js: "blue"                          }, // Blue
    { genz: "vàng",                     js: "yellow"                        }, // Yellow
    { genz: "cam",                      js: "orange"                        }, // Orange
    { genz: "tím",                      js: "purple"                        }, // Purple
    { genz: "hồng",                     js: "pink"                          }, // Pink
    { genz: "vàng_chanh",               js: "chartreuse"                    }, // Chartreuse
    { genz: "trong_suốt_màu",           js: "transparent"                   }, // Transparent
    { genz: "màu_hiện_tại",             js: "currentColor"                  }, // Current color

    // ╔══════════════════════════════════════════════════════╗
    // ║  📏  ĐƠN VỊ ĐO - Số Đo Của Đời                      ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "pixel",                    js: "px"                            }, // Pixels
    { genz: "phần_trăm",                js: "%"                             }, // Percent
    { genz: "chiều_rộng_viewport",      js: "vw"                            }, // Viewport width
    { genz: "chiều_cao_viewport",       js: "vh"                            }, // Viewport height
    { genz: "em_nhỏ",                   js: "em"                            }, // em unit
    { genz: "rem_to",                   js: "rem"                           }, // rem unit
    { genz: "phần_nhỏ",                 js: "fr"                            }, // Fraction (grid)

    // ╔══════════════════════════════════════════════════════╗
    // ║  🏆  BEST PRACTICES - Combo Hay Dùng                 ║
    // ╚══════════════════════════════════════════════════════╝
    { genz: "reset_toàn_bộ",            js: "* { margin: 0; padding: 0; box-sizing: border-box; }" }, // CSS reset
    { genz: "box_sizing",               js: "box-sizing: border-box"        }, // Border box
    { genz: "không_tràn",               js: "overflow: hidden"              }, // Prevent overflow
    { genz: "glassmorphism",            js: "background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2)" }, // Glass effect
    { genz: "neumorphism_sáng",         js: "box-shadow: 8px 8px 16px #d0d0d0, -8px -8px 16px #ffffff" }, // Neu light
    { genz: "truncate_text",            js: "overflow: hidden; text-overflow: ellipsis; white-space: nowrap" }, // Truncate
    { genz: "aspect_ratio",             js: "aspect-ratio"                  }, // Aspect ratio
    { genz: "tỉ_lệ_vuông",              js: "aspect-ratio: 1 / 1"           }, // Square
    { genz: "tỉ_lệ_video",              js: "aspect-ratio: 16 / 9"          }, // 16:9
];
