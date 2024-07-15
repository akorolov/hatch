
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const basic: CustomThemeConfig = {
    name: 'basic',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "2px",
		"--theme-rounded-container": "2px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-50)",
		"--on-secondary": "var(--color-tertiary-900)",
		"--on-tertiary": "var(--color-surface-50)",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #53796d 
		"--color-primary-50": "229 235 233", // #e5ebe9
		"--color-primary-100": "221 228 226", // #dde4e2
		"--color-primary-200": "212 222 219", // #d4dedb
		"--color-primary-300": "186 201 197", // #bac9c5
		"--color-primary-400": "135 161 153", // #87a199
		"--color-primary-500": "83 121 109", // #53796d
		"--color-primary-600": "75 109 98", // #4b6d62
		"--color-primary-700": "62 91 82", // #3e5b52
		"--color-primary-800": "50 73 65", // #324941
		"--color-primary-900": "41 59 53", // #293b35
		// secondary | #e89b64 
		"--color-secondary-50": "252 240 232", // #fcf0e8
		"--color-secondary-100": "250 235 224", // #faebe0
		"--color-secondary-200": "249 230 216", // #f9e6d8
		"--color-secondary-300": "246 215 193", // #f6d7c1
		"--color-secondary-400": "239 185 147", // #efb993
		"--color-secondary-500": "232 155 100", // #e89b64
		"--color-secondary-600": "209 140 90", // #d18c5a
		"--color-secondary-700": "174 116 75", // #ae744b
		"--color-secondary-800": "139 93 60", // #8b5d3c
		"--color-secondary-900": "114 76 49", // #724c31
		// tertiary | #6a4d61 
		"--color-tertiary-50": "233 228 231", // #e9e4e7
		"--color-tertiary-100": "225 219 223", // #e1dbdf
		"--color-tertiary-200": "218 211 216", // #dad3d8
		"--color-tertiary-300": "195 184 192", // #c3b8c0
		"--color-tertiary-400": "151 130 144", // #978290
		"--color-tertiary-500": "106 77 97", // #6a4d61
		"--color-tertiary-600": "95 69 87", // #5f4557
		"--color-tertiary-700": "80 58 73", // #503a49
		"--color-tertiary-800": "64 46 58", // #402e3a
		"--color-tertiary-900": "52 38 48", // #342630
		// success | #91bb68 
		"--color-success-50": "239 245 232", // #eff5e8
		"--color-success-100": "233 241 225", // #e9f1e1
		"--color-success-200": "228 238 217", // #e4eed9
		"--color-success-300": "211 228 195", // #d3e4c3
		"--color-success-400": "178 207 149", // #b2cf95
		"--color-success-500": "145 187 104", // #91bb68
		"--color-success-600": "131 168 94", // #83a85e
		"--color-success-700": "109 140 78", // #6d8c4e
		"--color-success-800": "87 112 62", // #57703e
		"--color-success-900": "71 92 51", // #475c33
		// warning | #ecd069 
		"--color-warning-50": "252 248 233", // #fcf8e9
		"--color-warning-100": "251 246 225", // #fbf6e1
		"--color-warning-200": "250 243 218", // #faf3da
		"--color-warning-300": "247 236 195", // #f7ecc3
		"--color-warning-400": "242 222 150", // #f2de96
		"--color-warning-500": "236 208 105", // #ecd069
		"--color-warning-600": "212 187 95", // #d4bb5f
		"--color-warning-700": "177 156 79", // #b19c4f
		"--color-warning-800": "142 125 63", // #8e7d3f
		"--color-warning-900": "116 102 51", // #746633
		// error | #c25447 
		"--color-error-50": "246 229 227", // #f6e5e3
		"--color-error-100": "243 221 218", // #f3ddda
		"--color-error-200": "240 212 209", // #f0d4d1
		"--color-error-300": "231 187 181", // #e7bbb5
		"--color-error-400": "212 135 126", // #d4877e
		"--color-error-500": "194 84 71", // #c25447
		"--color-error-600": "175 76 64", // #af4c40
		"--color-error-700": "146 63 53", // #923f35
		"--color-error-800": "116 50 43", // #74322b
		"--color-error-900": "95 41 35", // #5f2923
		// surface | #ddd1c0 
		"--color-surface-50": "255 255 255", // #faf8f6
		"--color-surface-100": "253 251 249", // #f8f6f2
		"--color-surface-200": "249 247 245", // #f7f4ef
		"--color-surface-300": "231 229 227", // #f1ede6
		"--color-surface-400": "211 209 207", // #e7dfd3
		"--color-surface-500": "181 179 177", // #ddd1c0
		"--color-surface-600": "141 139 137", // #c7bcad
		"--color-surface-700": "121 119 117", // #a69d90
		"--color-surface-800": "91 89 87", // #857d73
		"--color-surface-900": "81 79 77", // #6c665e
		
	}
}