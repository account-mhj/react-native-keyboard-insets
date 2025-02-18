#import <React/RCTView.h>

NS_ASSUME_NONNULL_BEGIN

@interface HBDKeyboardInsetsView : RCTView


@property(nonatomic, copy) RCTDirectEventBlock onStatusChanged;
@property(nonatomic, copy) RCTDirectEventBlock onPositionChanged;

@property(nonatomic, copy) NSString *mode;
@property(nonatomic, assign) CGFloat extraHeight;


@end

NS_ASSUME_NONNULL_END
