export default function checkIfTsConfigAdaptsModuleResolution(tsConfig) {
	const { compilerOptions } = tsConfig;

	// TypeScript 6 deprecated `baseUrl`; `paths` alone is now sufficient
	return 'baseUrl' in compilerOptions || 'paths' in compilerOptions;
}
