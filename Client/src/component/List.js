import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export default function BasicSimpleTreeView() {
  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        <TreeItem itemId="C:\" label="C:\">
          <TreeItem itemId="Users" label="Users">
            <TreeItem itemId="keven" label="keven">
              <TreeItem itemId="Desktop" label="Desktop">
                <TreeItem itemId="GitKraken" label="GitKraken">
                  <TreeItem itemId="TicTacToe" label="TicTacToe">
                  </TreeItem>
                </TreeItem>
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </SimpleTreeView>
    </Box>
  );
}