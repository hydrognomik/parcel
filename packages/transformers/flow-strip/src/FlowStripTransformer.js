// @flow
import {Transformer} from '@parcel/plugin';

import flowRemoveTypes from 'flow-remove-types';

export default (new Transformer({
  async loadConfig({config, options}) {
    if (!config.isSource) {
      config.setResult(false);
      return;
    }

    // Only run flow if `flow-bin` is listed as a dependency in the root package.json
    let conf = await config.getConfigFrom(options.projectRoot + '/index', [
      'package.json',
    ]);
    let pkg = conf?.contents;

    config.setResult(
      pkg &&
        (pkg.dependencies?.['flow-bin'] != null ||
          pkg.devDependencies?.['flow-bin'] != null),
    );
  },

  async transform({asset, config}) {
    if (!config) {
      return [asset];
    }

    let code = await asset.getCode();
    let output = flowRemoveTypes(code);
    asset.setCode(output.toString());

    return [asset];
  },
}): Transformer);
