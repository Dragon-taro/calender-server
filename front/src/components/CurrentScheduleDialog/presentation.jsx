import React from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
  Grid,
  Typography
} from '@material-ui/core';
import { Close, LocationOnOutlined, NotesOutlined } from '@material-ui/icons';

import styles from './style.css';

const spacer = (top, bottom) => ({
  margin: `${top}px 0 ${bottom} 0`
});

const CurrentScheduleDialog = ({
  schedule: { item, isDialogOpen },
  closeDialog
}) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth='xs' fullWidth>
      {/* 閉じるボタン共通化可能 */}
      <DialogActions>
        <div className={styles.closeButton}>
          <IconButton onClick={closeDialog} size='small'>
            <Close />
          </IconButton>
        </div>
      </DialogActions>

      <DialogContent>
        {item && (
          <>
            <div>
              {/* containerのGrid内でitemのGridを囲うようにする */}
              <Grid
                container
                spacing={1}
                alignItems='center'
                justify='space-between'
                style={spacer(0, 30)}
              >
                <Grid item>
                  <span className={styles.box}></span>
                </Grid>
                <Grid item xs={10}>
                  {/* component = ブラウザで使用されるタグ? */}
                  {/* variant = 文字の大きさの調整? */}
                  {/* Typography = テキスト表示に使用 */}
                  <Typography variant='h5' component='h2'>
                    {item.title}
                  </Typography>
                  <Typography color='textSecondary'>
                    {item.date.format('M月 D日')}
                  </Typography>
                </Grid>
              </Grid>
            </div>

            {item.location && (
              <Grid
                container
                spacing={1}
                alignItems='center'
                justify='space-between'
                style={spacer(0, 4)}
              >
                <Grid item>
                  <LocationOnOutlined />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{item.location}</Typography>
                </Grid>
              </Grid>
            )}

            {item.description && (
              <Grid
                container
                spacing={1}
                alignItems='center'
                justify='space-between'
                style={spacer(0, 4)}
              >
                <Grid item>
                  <NotesOutlined />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{item.description}</Typography>
                </Grid>
              </Grid>
            )}

          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CurrentScheduleDialog;
