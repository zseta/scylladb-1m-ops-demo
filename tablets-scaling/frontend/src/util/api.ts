import {
  allRecordValuesAreStrings,
  isObject,
  objectHasProperty,
} from '@/util/guard';

export type ScenarioEventKey =
  | 'original_cluster'
  | 'sample_data'
  | 'start_stress'
  | 'scale_out'
  | 'scale_in'
  | 'stop_stress';

export const playbookOutputEventKey = 'playbook_output';

interface PlaybookOutputData {
  readonly output: string;
}

export const isPlaybookOutput = (data: unknown): data is PlaybookOutputData =>
  isObject(data) &&
  objectHasProperty(data, 'output') &&
  typeof data['output'] === 'string';

export type GrafanaURLs = Readonly<Record<string, string>>;

export const isGrafanaUrls = (data: unknown): data is GrafanaURLs =>
  isObject(data) && allRecordValuesAreStrings(data);
