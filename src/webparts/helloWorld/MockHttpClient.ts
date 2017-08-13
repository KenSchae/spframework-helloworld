// This import matches up to the export defined in HelloWorld.
import { ISPList } from './HelloWorldWebPart';

// This class mocks up a SharePoint environment for use when the
// workbench is running locally.
export default class MockHttpClient  {

    // Create some mocked lists
    private static _items: ISPList[] = [{ Title: 'Mock List', Id: '1' },
                                        { Title: 'Mock List 2', Id: '2' },
                                        { Title: 'Mock List 3', Id: '3' }];

    public static get(): Promise<ISPList[]> {
    return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}
